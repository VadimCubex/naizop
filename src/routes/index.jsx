import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import About from "../pages/About/About";
import Account from "../pages/Account/Account";
import Affiliates from "../pages/Affiliates/Affiliates";
import AllServices from "../pages/AllServices/AllServices";
import Ambassador from "../pages/Ambassador/Ambassador";
import Api from "../pages/Api/Api";
import BestQualityService from "../pages/BestQualityService/BestQualityService";
import Blog from "../pages/Blog/Blog";
import BlogArticle from "../pages/BlogArticle/BlogArticle";
import BlogCategoryPage from "../pages/BlogCategory/BlogCategory";
import CompletedOrder from "../pages/CompletedOrder/CompletedOrder";
import Download from "../pages/Download/Download";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MassOrder from "../pages/MassOrder/MassOrder";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import Orders from "../pages/Orders/Orders";
import Page404 from "../pages/Page404/Page404";
import Payment from "../pages/Payment/Payment";
import PaymentError from "../pages/PaymentError/PaymentError";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import PlaceNewOrder from "../pages/PlaceNewOrder/PlaceNewOrder";
import RedeemHistory from "../pages/RedeemHistory/RedeemHistory";
import Register from "../pages/Register/Register";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Subscriptions from "../pages/Subscriptions/Subscriptions";
import Support from "../pages/Support/Support";
import Terms from "../pages/Terms/Terms";
import Tools from "../pages/Tools/Tools";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import TrackYourOrder from "../pages/TrackYourOrder/TrackYourOrder";
import Updates from "../pages/Updates/Updates";
import ViewTicket from "../pages/ViewTicket/ViewTicket";
import VIPRewards from "../pages/VIPRewards/VIPRewards";

const NaizopRoutes = () => {
  return (
    <Routes>
      <Route path="/download" element={<Download />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="services"
          element={<AllServices className="background-img" />}
        />
        <Route path="faq" element={<FAQ className="background-img" />} />
        <Route path="blog" element={<Blog className="background-img" />} />
        <Route
          path="blog/category"
          element={<BlogCategoryPage className="background-img" />}
        />
        <Route
          path="blog/category/article"
          element={<BlogArticle className="background-img" />}
        />
        <Route path="tools" element={<Tools className="background-img" />} />
        <Route path="about" element={<About className="background-img" />} />
        <Route path="best-quality-service" element={<BestQualityService />} />
        <Route path="order-detail" element={<OrderDetail />} />
        <Route path="completed-order" element={<CompletedOrder />} />
        <Route path="track-order" element={<TrackOrder />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route
          path="*"
          element={<Page404 container={true} className="background-img" />}
        />
      </Route>
      <Route path="/profile/" element={<ProfileLayout />}>
        <Route index element={<Navigate to="/profile/vip-rewards" replace />} />
        <Route path="vip-rewards" element={<VIPRewards />} />
        <Route path="account" element={<Account />} />
        <Route path="redeem-history" element={<RedeemHistory />} />
        <Route path="support" element={<Support />} />
        <Route path="support/ticket" element={<ViewTicket />} />
        <Route path="place-new-order" element={<PlaceNewOrder />} />
        <Route path="mass-order" element={<MassOrder />} />
        <Route path="services" element={<AllServices container={false} />} />
        <Route path="orders" element={<Orders />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="add-funds" element={<Payment />} />
        <Route path="add-funds/payment-history" element={<PaymentHistory />} />
        <Route path="add-funds/error" element={<PaymentError />} />
        <Route path="affiliates" element={<Affiliates />} />
        <Route path="updates" element={<Updates />} />
        <Route path="blog" element={<Blog container={false} />} />
        <Route
          path="blog/category"
          element={<BlogCategoryPage container={false} />}
        />
        <Route
          path="blog/category/article"
          element={<BlogArticle container={false} />}
        />
        <Route path="tools" element={<Tools container={false} />} />
        <Route path="terms" element={<Terms />} />
        <Route path="faq" element={<FAQ container={false} />} />
        <Route path="api" element={<Api />} />
        <Route path="ambassador-program" element={<Ambassador />} />
        <Route path="track-your-order" element={<TrackYourOrder />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default NaizopRoutes;
