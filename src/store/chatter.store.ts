import { filter } from 'ramda';
import { interval, merge, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { generateChatterText } from 'utils/lorem';
import { User, UserStore } from './user.store';

export interface Post {
  username: string;
  timestamp: number;
  content: string;
  count: number;
  isLiked: boolean;
  isDisliked: boolean;
}

const createPostStream = ({ postFrequency, username }: User) =>
  interval(postFrequency).pipe(
    map<number, Post>((idx) => ({
      username,
      timestamp: Date.now(),
      content: generateChatterText(),
      count: idx + 1,
      isLiked: false,
      isDisliked: false,
    })),
  );

const isLessThan30Seconds = ({ timestamp }: Post) =>
  Date.now() - timestamp < 30000;

export class ChatterStore {
  constructor(private user: UserStore) {
    this.posts$ = merge(...this.user.collection.map(createPostStream)).pipe(
      scan<Post, Post[]>(
        (list, post) => [post, ...filter(isLessThan30Seconds, list)],
        [],
      ),
    );
  }

  public posts$: Observable<Post[]>;
}
