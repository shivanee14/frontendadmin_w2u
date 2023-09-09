import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import Rough from "../components/super components/rough components/Rough";
import Error from "../pages/Error";
import CategoryPage from "../pages/CategoryPage";
import SubCategoryPage from "../pages/SubCategoryPage";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import Rough2 from "../components/super components/rough components/Rough2";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import EditUserProfilePage from "../pages/EditUserProfilePage";
import ListedItemPage from "../pages/ListedItemPage";
import UserPage from "../pages/UserPage";
import NewsPage from "../pages/NewsPage";
import BusinessListingPage from "../pages/BusinessListingPage";
import MainNews from "../pages/MainNews";
import SearchResult from "../pages/SearchResult";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage";
import FAQPage from "../pages/FAQPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import AdsPolicyPage from "../pages/AdsPolicyPage";
import VendorPolicyPage from "../pages/VendorPolicyPage";
import Dashboard from "../components/admin/dashboard/Dashboard";
import AddCategory from "../components/admin/admin category/AddCategory";
import ListCategory from "../components/admin/admin category/ListCategory";
import AddSubcategory from "../components/admin/admin subcategory/AddSubcategory";
import ListSubcategory from "../components/admin/admin subcategory/ListSubcategory";
import AddNews from "../components/admin/admin news/AddNews";
import ListNews from "../components/admin/admin news/ListNews";
import ListUser from "../components/admin/admin user details/ListUser";
import ListAdvertisement from "../components/admin/admin advertisement/ListAdvertisement";
import AddAdvertisement from "../components/admin/admin advertisement/AddAdvertisement";
import ListBusinessListing from "../components/admin/admin business listing/ListBusinessListing";
import AddBusinessListing from "../components/admin/admin business listing/AddBusinessListing";
import ListDarshanTiming from "../components/admin/admin darshan timing/ListDarshanTiming";
import AddDarshanTiming from "../components/admin/admin darshan timing/AddDarshanTiming";
import HomeVideo from "../components/admin/admin home video/HomeVideo";
import AddHomeVideo from "../components/admin/admin home video/AddHomeVideo";
import ListNewsletterUser from "../components/admin/admin newsletters user/ListNewsletterUser";
import AddSocialMedia from "../components/admin/Social Media/AddSocialMedia";
import ListSocialMeida from "../components/admin/Social Media/ListSocialMeida";
import ListEvent from "../components/admin/admin Event/ListEvent";

function PageRoutes() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/:category_name/:category_id" element={<CategoryPage />} />;
          <Route exact
            // path="/:category/:subcategoryname"
            path="/:category_name/:category_id/:subcategory_Name/:subcategory_id"
            element={<SubCategoryPage />}
          />
          <Route
            exact
            path="/:category_name/:category_id/:subcategory_Name/:subcategory_id/:business_name/:business_id"
            // path="/listeditem"
            element={<ListedItemPage />}
          />
          <Route exact path="news" element={<NewsPage />} />
          <Route
            exact
            path="news/:news_id"
            element={<MainNews />}
          />

          <Route
            exact
            path={`find_in_udaipur/:searched_query`}
            // path={`find_in_udaipur/search/q=:searched_query`}
            element={<SearchResult />}
          />

          <Route exact path="signup" element={<SignUpPage />} />
          <Route exact path="signin" element={<SignInPage />} />

          <Route exact path="user" element={<UserPage />} />
          <Route
            exact
            path="user/business_list"
            element={<BusinessListingPage />}
          />
          <Route
            exact
            path="user/edit_details"
            element={<EditUserProfilePage />}
          />

          {/* admin panel */}


          <Route exact path="admin" element={<Dashboard />}>

             {/* category */}

            <Route exact path="add_category" element={<AddCategory />} />
            <Route exact path="list_category" element={<ListCategory />} />

            {/* subcategory */}

            <Route exact path="add_subcategory" element={<AddSubcategory />} />
            <Route
              exact
              path="list_subcategory"
              element={<ListSubcategory />}
            />
            {/* news  */}
            <Route exact path="add_news" element={<AddNews />} />
            <Route exact path="list_news" element={<ListNews />} />

            {/* user list */}

            <Route exact path="list_user" element={<ListUser />} />

            {/* ------------------------ */}

            {/* advertisement */}
            <Route exact path="list_advertisement" element={< ListAdvertisement />} />
            <Route exact path="add_advertisement" element={<AddAdvertisement />} />

            {/* Businesses */}
            <Route exact path="list_businesses" element={<ListBusinessListing />} />
            <Route exact path="add_businesses" element={<AddBusinessListing />} />

            {/* darshan_timing */}
            <Route exact path="list_darshan_timing" element={<ListDarshanTiming />} />
            <Route exact path="add_darshan_timing" element={<AddDarshanTiming />} />

            {/* home_video */}
            <Route exact path="list_home_video" element={<HomeVideo />} />
            <Route exact path="add_home_video" element={<AddHomeVideo />} />

            {/* newsletter */}
            <Route exact path="list_newsletter" element={<ListNewsletterUser />} />
             {/* Social Media */}
             <Route exact path="list_social_media" element={<ListSocialMeida />} />
            <Route exact path="add_social_media" element={<AddSocialMedia />} />
             
              {/* Event */}
              <Route exact path="list_event" element={<ListEvent />} />
            <Route exact path="add_event" element={<AddSocialMedia />} />



          </Route>
          <Route exact path="contact-us" element={<ContactUsPage />} />
          <Route exact path="about-us" element={<AboutUsPage />} />
          {/* <Route exact path="rough2" element={<Rough2 />} /> */}
          <Route exact path="t&c" element={<TermsAndConditionsPage />} />
          <Route exact path="faq" element={<FAQPage />} />
          <Route exact path="privacy_policy" element={<PrivacyPolicyPage />} />
          <Route exact path="ads_policy" element={<AdsPolicyPage />} />
          <Route exact path="vendor_policy" element={<VendorPolicyPage />} />
          <Route exact path="rough" element={<Rough />} />
          <Route exact path="/" element={<IndexPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router >
    </>
  );
}

export default PageRoutes;
