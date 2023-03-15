// const isProd = process.env.NODE_ENV == 'production'

export const MENUITEMS = [
  {
    // menutitle: "MAIN",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}indexpage`,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg"
          className="side-menu__icon"
          enable-background="new 0 0 24 24" height="24px" 
          viewBox="0 0 24 24" 
          width="24px" 
          fill="#000000">
            <rect fill="none" height="24" width="24"/>
            <path d="M11,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h6V21z M13,21h6c1.1,0,2-0.9,2-2v-7h-8V21z M21,10V5c0-1.1-0.9-2-2-2h-6v7H21z"/></svg>
        ),
        badge: "badge bg-success text-light",
        type: "link",
        active: false,
        selected: false,
        title: "Dashboard",
      },
      {
        path: `${import.meta.env.BASE_URL}assessments`,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg"
          className="side-menu__icon"
           height="24px" viewBox="0 0 24 24" width="24px" 
           fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
        ),
        badge: "badge bg-success text-light",
        type: "link",
        active: false,
        selected: false,
        title: "Assesments",
      },
      {
        path: `${import.meta.env.BASE_URL}constraints`,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg"  className="side-menu__icon" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M21.19,21.19L2.81,2.81L1.39,4.22l2.27,2.27C2.61,8.07,2,9.96,2,12c0,5.52,4.48,10,10,10c2.04,0,3.93-0.61,5.51-1.66 l2.27,2.27L21.19,21.19z M10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l0.18-0.18l1.41,1.41L10.59,16.6z M13.59,10.76l-7.1-7.1 C8.07,2.61,9.96,2,12,2c5.52,0,10,4.48,10,10c0,2.04-0.61,3.93-1.66,5.51l-5.34-5.34l2.65-2.65l-1.41-1.41L13.59,10.76z"/></svg>
        ),
        badge: "badge bg-success text-light",
        type: "link",
        active: false,
        selected: false,
        title: "Constraints",
      },

      {

        title: 'Timetable', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M21,12V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.9,4,3,4.9,3,6v14c0,1.1,0.9,2,2,2h7v-2H5V10h14v2H21z M15.64,20 c0.43,1.45,1.77,2.5,3.36,2.5c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-0.95,0-1.82,0.38-2.45,1l1.45,0V18h-4v-4h1.5l0,1.43 C16.4,14.55,17.64,14,19,14c2.76,0,5,2.24,5,5s-2.24,5-5,5c-2.42,0-4.44-1.72-4.9-4L15.64,20z"/></g></svg>), type: 'sub', active: false, children: [

            { path:`${import.meta.env.BASE_URL}examtt`, type: 'link', active: false, selected: false, title: 'Exam Timetable' },
            { path:`${import.meta.env.BASE_URL}classtt`, type: 'link', active: false, selected: false, title: 'Class Timetable' },
            { path:`${import.meta.env.BASE_URL}addexamtt`, type: 'link', active: false, selected: false, title: 'Add Exam Timetable' },
            { path:`${import.meta.env.BASE_URL}addclasstt`, type: 'link', active: false, selected: false, title: 'Add Class Timetable' },
        ]
    },
      {
        path: `${import.meta.env.BASE_URL}profile`,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/></g></svg>
        ),
        badge: "badge bg-success text-light",
        type: "link",
        active: false,
        selected: false,
        title: "Profile",
      },
      {
        path: `${import.meta.env.BASE_URL}logout`,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
        ),
        badge: "badge bg-success text-light",
        type: "link",
        active: false,
        selected: false,
        title: "Log Out",
      },


    ],
  },

  // {
  //     menutitle: "COMPONENTS",
  //     Items: [
  //         { path: `${import.meta.env.BASE_URL}widgets`, icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3" /><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z" /></svg>), badge: "badge bg-warning text-dark", type: 'link', active: false, selected: false, title: 'Widgets' },
  //     ]
  // }
];
