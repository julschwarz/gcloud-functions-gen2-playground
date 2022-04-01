import * as express from 'express';

export function helloworld(req: express.Request, res: express.Response) {
	res.send('Hello world!!');
}
