import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import About from "../pages/About/About";
import Account from "../pages/Account/Account";
import AllServices from "../pages/AllServices/AllServices";
import Api from "../pages/Api/Api";
import BestQualityService from "../pages/BestQualityService/BestQualityService";
import CompletedOrder from "../pages/CompletedOrder/CompletedOrder";
import Dashboard from "../pages/Dashboard/Dashboard";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import MassOrder from "../pages/MassOrder/MassOrder";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import Orders from "../pages/Orders/Orders";
import Payment from "../pages/Payment/Payment";
import PaymentError from "../pages/PaymentError/PaymentError";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import PlaceNewOrder from "../pages/PlaceNewOrder/PlaceNewOrder";
import RedeemHistory from "../pages/RedeemHistory/RedeemHistory";
import RedeemSupport from "../pages/RedeemSupport/RedeemSupport";
import Subscriptions from "../pages/Subscriptions/Subscriptions";
import TestComponents from "../pages/TestComponents";
import TrackOrder from "../pages/TrackOrder/TrackOrder";

const NaizopRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<TestComponents />} />
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/services"
          element={<AllServices className="background-img" />}
        />
        <Route path="/faq" element={<FAQ className="background-img" />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/about" element={<About className="background-img" />} />
        <Route path="/best-quality-service" element={<BestQualityService />} />
        <Route path="/order-detail" element={<OrderDetail />} />
        <Route path="/compleled-order" element={<CompletedOrder />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Route>
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/profile/account" element={<Account />} />
        <Route path="/profile/redeem-history" element={<RedeemHistory />} />
        <Route path="/profile/redeem-support" element={<RedeemSupport />} />

        <Route path="/profile/place-new-order" element={<PlaceNewOrder />} />
        <Route path="/profile/mass-order" element={<MassOrder />} />
        <Route
          path="/profile/services"
          element={<AllServices container={false} />}
        />
        <Route path="/profile/popular-service" element={<Dashboard />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/subscriptions" element={<Subscriptions />} />
        <Route path="/profile/add-funds" element={<Payment />} />
        <Route
          path="/profile/add-funds/payment-history"
          element={<PaymentHistory />}
        />
        <Route path="/profile/add-funds/error" element={<PaymentError />} />
        <Route path="/profile/support" element={<Dashboard />} />
        <Route path="/profile/affiliates" element={<Dashboard />} />
        <Route path="/profile/favorites" element={<Dashboard />} />
        <Route path="/profile/childpanel" element={<Dashboard />} />

        <Route path="/profile/updates" element={<Dashboard />} />
        <Route path="/profile/blog" element={<Dashboard />} />
        <Route path="/profile/tools" element={<Dashboard />} />
        <Route path="/profile/terms" element={<Dashboard />} />
        <Route path="/profile/faq" element={<FAQ container={false} />} />
        <Route path="/profile/api" element={<Api />} />
        <Route path="/profile/ambassador-program" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default NaizopRoutes;
