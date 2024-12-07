import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from '../../Pages/Public/Layouts/PublicLayout'
import Home from '../../Pages/Public/Home'
import About from '../../Pages/Public/About'
import Services from '../../Pages/Public/Services'
import Career from '../../Pages/Public/Career'
import Contact from '../../Pages/Public/Contact'
import WebDevelopment from '../../Pages/Services/WebDev/WebDevelopment'
import AndroidDevelopment from '../../Pages/Services/adroid/AndroidDevelopment'
import ReactNative from '../../Pages/Services/adroid/reactNative/ReactNative'
import AndroidNative from '../../Pages/Services/adroid/androidNative/AndroidNative'
import IosNative from '../../Pages/Services/adroid/iosNative/IosNative'
import HybridApp from '../../Pages/Services/adroid/hybrid/HybridApp'
import CrossPlateform from '../../Pages/Services/adroid/crossPlateform/CrossPlateform';
import PhpWeb from '../../Pages/Services/WebDev/php/PhpWeb'
import ReactWeb from '../../Pages/Services/WebDev/react/ReactWeb'
import LaravelWeb from '../../Pages/Services/WebDev/laravel/LaravelWeb'
import CmsDev from '../../Pages/Services/cms/CmsDev'
import Wordpress from '../../Pages/Services/cms/wordpress/Wordpress'
import WebsiteDesign from '../../Pages/Services/website/WebsiteDesign'
import UiUxDesign from '../../Pages/Services/website/uiux/UiUxDesign'
import Ecommerce from '../../Pages/Services/ecommerce/Ecommerce'
import ApiService from '../../Pages/Services/api/ApiService'
import NotFound from '../../Component/Public/NotFound'
import Privacy from './../../Pages/Public/Privacy';

const PublicRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PublicLayout />} >
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Services />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/web-development-company' element={<WebDevelopment />} />
                    <Route path='/app-development-company' element={<AndroidDevelopment />} />
                    <Route path='/react-native-app-development-company' element={<ReactNative />} />
                    <Route path='/react-native-app-development-services' element={<AndroidNative />} />
                    <Route path='/ios-app-development-services' element={<IosNative />} />
                    <Route path='/hybrid-app-development-company' element={<HybridApp />} />
                    <Route path='/cross-plateform-app-development' element={<CrossPlateform />} />
                    <Route path='/php-development-services' element={<PhpWeb />} />
                    <Route path='/reactjs-development-services' element={<ReactWeb />} />
                    <Route path='/laravel-development-company' element={<LaravelWeb />} />
                    <Route path='/cms-development-company' element={<CmsDev />} />
                    <Route path='/wordpress-development-services' element={<Wordpress />} />
                    <Route path='/website-designing-company' element={<WebsiteDesign />} />
                    <Route path='/ui-ux-development-company' element={<UiUxDesign />} />
                    <Route path='/ecommerce-services' element={<Ecommerce />} />
                    <Route path='/api-development-and-integration' element={<ApiService />} />
                    <Route path='/privacy-policy' element={<Privacy />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>

        </div>
    )
}

export default PublicRoutes
