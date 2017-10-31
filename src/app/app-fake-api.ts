import {
  ApiBase,
  ApiMethod,
  ApiParameter,
  ApiParameterTypes
} from 'ng-restclient';
import { Observable } from 'rxjs/Observable';
import { RequestMethod } from '@angular/http';

@ApiBase('https://jsonplaceholder.typicode.com')
export class FakeAPI {
  @ApiMethod({ url: '/posts/{postId}' })
  public getPost(
    @ApiParameter({ type: ApiParameterTypes.Route })
    postId: number,
    @ApiParameter() value: number
  ): Observable<JSON> {
    return null;
  }

  @ApiMethod({ url: '/posts', method: RequestMethod.Post })
  public postPost(): Observable<JSON> {
    return null;
  }

  @ApiMethod({ url: '/posts/{postId}', method: RequestMethod.Put })
  public putPost(
    @ApiParameter({ type: ApiParameterTypes.Route })
    postId: number
  ): Observable<JSON> {
    return null;
  }

  @ApiMethod({
    url: '/posts/{postId}',
    method: RequestMethod.Delete
  })
  public deletePost(
    @ApiParameter({ type: ApiParameterTypes.Route })
    postId: number
  ): Observable<JSON> {
    return null;
  }
}
