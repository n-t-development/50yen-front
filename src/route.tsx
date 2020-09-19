// import * as React from "react";
// import loadable from '@loadable/component';

// const BASE_PATH = '/list';

// export interface Props {
//     authentication: {
//         status: string;
//     };
//     fetchStatus: () => void;
// }

// export const AsyncList: any = loadable(
//     () => import(/* webpackChunkName: "list" */ './components/List/components'),
//     { fallback: <div /> }
// );

// const routes = [
//     {
//         path: BASE_PATH,
//         exact: true,
//         component: AsyncList
//     }
// ];

// export default routes;