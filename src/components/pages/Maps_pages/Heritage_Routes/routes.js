 // Translation
import i18next from '../../../../i18n';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';


 const Something =  [
    {
      id: 0,
      category: "University",
      title: t('sidebar.project'),
      time: "15 min",
      km: "3km",
      ath: "Easy",
      img: require('../../../../assets/imgs/routes/unibo_1.jpg'),
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      more: "Find out more",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      },
      first_place: "place",
  },
  {
      id: 1,
      category: "University",
      title: "A title",
      time: "5 min",
      km: "10km",
      path: "Intermediate",
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../../assets/imgs/routes/unibo_1.jpg'),
      more: "Find out more",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
  },
  {
      id: 2,
      category: "Food",
      title: "A title",
      time: "30 min",
      km: "5km",
      path: "Easy",
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../../assets/imgs/routes/tortellini_Angelo_Muratore.jpg'),
      more: "Find out more",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
  },
  {
      id: 3,
      category: "Women",
      title: "A title",
      time: "5 min",
      km: "10km",
      path: "Intermediate",
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../../assets/imgs/routes/bassi_docufilm.jpg'),
      more: <a href='https://react-icons.github.io/react-icons/search?q=facebook'>"Find out more"</a>,
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
  },
  {
      id: 4,
      category: "Museum",
      title: "A title",
      time: "5 min",
      km: "10km",
      path: "Intermediate",
      text: "Lorem ipsum dolor sit amet, con adi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: require('../../../../assets/imgs/routes/museum.jpg'),
      more: "Find out more",
      tag: {
          tag_1: "tag",
          tag_2: "tag",
          tag_3: "tag"
      }
  }
  ]; 
export default Something;