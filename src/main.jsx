import React, { Fragment, lazy } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import './index.scss';
// import Loader from './Components/Authentication';
import SignIn from './Components/Authentication/SignIn';
import Indexpage from './Components/indexpage/Indexpage';
import Assessments from "./Components/Assessments/Assessments"
import Constraints from "./Components/Constraints/Constraints"
import Timetable from './Components/Timetable/Timetable'
import Examtt from './Components/Timetable/Examtt'
import Classtt from './Components/Timetable/Classtt'
import Profile from "./Components/profile/Profile"
import Logout from "./Components/logout/Logout"
import FirebaseAuth from "./Components/Authentication/FirebaseAuth"
import SignUp from "./Components/Authentication/SignUp"
import RegUnder from "./Components/Registration/indexpage"
import RegPHD from "./Components/Registration/indexpage1"
import RegPOST from "./Components/Registration/indexpage2"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import AddExamtt from './Components/Timetable/AddExamtt'
import AddClasstt from './Components/Timetable/AddClasstt'




// const Indexpage = lazy(() => import('./Components/indexpage/Indexpage'));


//Widgets
// const Widgets = lazy(() => import('./Components/Widgets/Widgets'));

// const AdmissionForms = lazy(() => import('./Components/admissionForms/AdmissionForms'));

// const ChangePassword = lazy(() => import('./Components/changePassword/ChangePassword'));

// const Profile = lazy(() => import('./Components/profile/Profile'));

// const Logout = lazy(() => import('./Components/logout/Logout'));






ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>

      {/* <React.Suspense fallback={<Loader />}> */}
    <MemoryRouter>
  
        <Routes>
        
          {/* Components Routes */}

          <Route path="" element={<FirebaseAuth />}>
            <Route index element={<SignIn />} />
            <Route path="admissionsignin" element={<SignIn />} />
            {/* <Route path={`${import.meta.env.BASE_URL}FirebaseAuthentication/FirebaseSignIn`} element={<SignIn />} /> */}
            <Route path="admissionsignup" element={<SignUp />} />
          </Route>

          <Route path="" element={<App />}>
            <Route index element={<Indexpage />} />

            {/* Main */}
            
            <Route path="indexpage" element={<Indexpage />} />
            <Route path="reg-under" element={<RegUnder />} />
            <Route path="reg-phd" element={<RegPHD />} />
            <Route path="reg-post" element={<RegPOST />} />
            {/* Widgets */}
           
            {/* <Route path="widgets" element={<Widgets />} /> */}

            <Route path="assessments" element={<Assessments />} />

            <Route path="constraints" element={<Constraints />} />
/t
            <Route path="profile" element={<Profile />} />

            <Route path="logout" element={<Logout />} />

            <Route path="timetable" element={<Timetable />} />

            <Route path="examtt" element={<Examtt />} />

            <Route path="classtt" element={<Classtt />} />

            <Route path="addexamtt" element={<AddExamtt />} />

            <Route path="addclasstt" element={<AddClasstt />} />
            </Route>
        </Routes>
    </MemoryRouter>
      {/* </React.Suspense> */}
  </Fragment>
)
