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
import ListSocialMedia from "../components/admin/Social Media/ListSocialMedia";
import ListEvent from "../components/admin/admin Event/ListEvent";
import AddEvent from '../components/admin/admin Event/AddEvent';
import AddGuide from '../components/admin/Guide/AddGuide';
import ListGuide from "../components/admin/Guide/ListGuide";
import AddBloginfluencer from "../components/admin/admin blogInfluencer/AddBloginfluencer";
import ListBloginfluencer from "../components/admin/admin blogInfluencer/ListBloginfluencer";
import AddBlog from "../components/admin/admin blog/AddBlog";
import ListBlog from "../components/admin/admin blog/ListBlog";
import Addwedding_Agent from "../components/admin/admin wedding_Agent/Addwedding_Agent";
import Listwedding_Agent from "../components/admin/admin wedding_Agent/Listwedding_Agent";
import ListFood from "../components/admin/Food/ListFood";
import AddFood from "../components/admin/Food/AddFood";
import ListMandir from "../components/admin/Mandir/ListMandir";
import AddMandir from "../components/admin/Mandir/AddMandir";
import ListShopping from "../components/admin/Shopping/ListShopping";
import AddShopping from "../components/admin/Shopping/AddShopping";
import ListTourist from "../components/admin/Tourist/ListTourist";
import AddTourist from "../components/admin/Tourist/AddTourist";
import AddOnlineDirectory from "../components/admin/OnlineDirectory/AddOnlineDirectory";
import ListOnlineDirectory from "../components/admin/OnlineDirectory/ListOnlineDirectory";
import ListOrganizedby from "../components/admin/admin Organizedby/ListOrganizedby";
import AddOrganizedby from "../components/admin/admin Organizedby/AddOrganizedby";

function PageRoutes() {
  return (<>
    <Router>
      <Routes>
        <Route exact path="/:category_name/:category_id" element={<CategoryPage />} />;
        <Route exact path="/:category_name/:category_id/:subcategory_Name/:subcategory_id" element={<SubCategoryPage />} />
        {/* path="/:category/:subcategoryname"  */}
        <Route exact path="/:category_name/:category_id/:subcategory_Name/:subcategory_id/:business_name/:business_id" element={<ListedItemPage />} />
        {/* path="/listeditem" */}
        <Route exact path="news" element={<NewsPage />} />
        <Route exact path="news/:news_id" element={<MainNews />} />
        <Route exact path={`find_in_udaipur/:searched_query`} element={<SearchResult />} />
        {/* path={`find_in_udaipur/search/q=:searched_query`} */}
        <Route exact path="signup" element={<SignUpPage />} />
        <Route exact path="signin" element={<SignInPage />} />
        <Route exact path="user" element={<UserPage />} />
        <Route exact path="user/business_list" element={<BusinessListingPage />} />
        <Route exact path="user/edit_details" element={<EditUserProfilePage />} />

        {/* Admin Panel */}
        <Route exact path="admin" element={<Dashboard />}>

          {/* Category */}
          <Route exact path="add_category" element={<AddCategory />} />
          <Route exact path="list_category" element={<ListCategory />} />

          {/* Subcategory */}
          <Route exact path="add_subcategory" element={<AddSubcategory />} />
          <Route exact path="list_subcategory" element={<ListSubcategory />} />

          {/* News  */}
          <Route exact path="add_news" element={<AddNews />} />
          <Route exact path="list_news" element={<ListNews />} />

          {/* User List */}
          <Route exact path="list_user" element={<ListUser />} />
          {/* ------------------------ */}

          {/* Advertisement */}
          <Route exact path="list_advertisement" element={< ListAdvertisement />} />
          <Route exact path="add_advertisement" element={<AddAdvertisement />} />

          {/* Businesses */}
          <Route exact path="list_businesses" element={<ListBusinessListing />} />
          <Route exact path="add_businesses" element={<AddBusinessListing />} />

          {/* Darshan Timing */}
          <Route exact path="list_darshan_timing" element={<ListDarshanTiming />} />
          <Route exact p ath="add_darshan_timing" element={<AddDarshanTiming />} />

          {/* Home_Video */}
          <Route exact path="list_home_video" element={<HomeVideo />} />
          <Route exact path="add_home_video" element={<AddHomeVideo />} />

          {/* Newsletter */}
          <Route exact path="list_newsletter" element={<ListNewsletterUser />} />

          {/* Social Media */}
          <Route exact path="list_social_media" element={<ListSocialMedia />} />
          <Route exact path="add_social_media" element={<AddSocialMedia />} /> 
             
          {/* Event */}
          <Route exact path="list_event" element={<ListEvent />} />
          <Route exact path="add_event" element={<AddEvent />} />

          {/* Guide */}
          <Route exact path="list_guide" element={<ListGuide />} />
          <Route exact path="add_guide" element={<AddGuide />} />         
          
          {/* bloggerInfluencer */}
          <Route exact path="list_blogger" element={<ListBloginfluencer />} />
          <Route exact path="add_blogger" element={<AddBloginfluencer />} />
            
          {/* bloggerInfluencer */}
          <Route exact path="list_blog" element={<ListBlog />} />
          <Route exact path="add_blog" element={<AddBlog />} />

          {/* Wedding_agent */}
          <Route exact path="list_wedding_agent" element={<Listwedding_Agent />} />
          <Route exact path="add_wedding_agent" element={<Addwedding_Agent/>} />

          {/* Food */}
          <Route exact path="list_food" element={<ListFood />} />
          <Route exact path="add_food" element={<AddFood />} />

          {/* Mandir */}
          <Route exact path="list_mandir" element={<ListMandir />} />
          <Route exact path="add_mandir" element={<AddMandir />} />

          {/* Shopping */}
          <Route exact path="list_shopping" element={<ListShopping />} />
          <Route exact path="add_shopping" element={<AddShopping />} />

          {/* Tourist */}
          <Route exact path="list_tourist" element={<ListTourist />} />
          <Route exact path="add_tourist" element={<AddTourist />} />

          {/* Online Directory */}
          <Route exact path="list_online_directory" element={<ListOnlineDirectory />} />
          <Route exact path="add_online_directory" element={<AddOnlineDirectory />} />

          {/* Organized By */}
          <Route exact path="list_organizedby" element={<ListOrganizedby />} />
          <Route exact path="add_organizedby" element={<AddOrganizedby />} />

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
  </>);
}

export default PageRoutes;
