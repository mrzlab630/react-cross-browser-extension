import { ErrorPage,
        Home} from '../../views/pages';





const appRoutes = {
    home:{
        path:'/',
        component:Home,
        exact: true,
        private:false,
    },
    error:{
        path:'/Error404',
        component:ErrorPage,
        exact: true,
        private:false,
    },
};

export default appRoutes;