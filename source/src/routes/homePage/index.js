const express = require('express');
const router = express.Router();
const { loggedin } = require('../../middlewares/auth/auth.middware')
const { admin } = require('../../middlewares/auth/auth.middware')

const homeController = require('../../app/controllers/homeController');

router.post('/logout', homeController.handleLogout)

router.get('/phim-dang-chieu', homeController.movies);
router.get('/phim-sap-chieu', homeController.smovies);


router.get('/uu-dai', homeController.fav);
router.get('/chinh-sach', homeController.policy);
router.get('/chi-tiet-phim/:maphim?', homeController.detail);

router.get('/tim-kiem', homeController.search);
router.get('/ve-chung-toi', homeController.aboutUs);


router.get('/mua-ve/:maphim?', homeController.ticket);
router.get('/mua-ve/:maphim/:masuatchieu', homeController.chooseTicket);
router.post('/mua-ve/:maphim/:masuatchieu', homeController.payMent);
router.post('/dung-ma-giam-gia', homeController.useSale);

router.get('/the-loai-phim', homeController.movie);

router.get('/dien-vien', homeController.actor);
router.get('/top-phim', homeController.top);
router.get('/chi-tiet-dien-vien/:madienvien?', homeController.actorDetail);

router.get('/dao-dien', homeController.director);
router.get('/chi-tiet-dao-dien/:madaodien?', homeController.directorDetail);

router.get('/binh-luan-phim', homeController.review);
router.get('/chi-tiet-binh-luan-phim/:matin?', homeController.reviewDetail);

router.get('/blog-dien-anh', homeController.blog);
router.get('/chi-tiet-blog-dien-anh/:matin?', homeController.blogDetail);

router.get('/ho-tro', homeController.support);
router.get('/chi-tiet-khuyen-mai/:makhuyenmai', homeController.favDetail);

router.get('/gia-ve', homeController.ticketprice);
router.get('/login', homeController.handleLogin);
router.get('/register', homeController.handleRegister);
router.get('/thanh-vien', loggedin, homeController.member);
router.post('/thanh-vien', homeController.handleUpdateInfo);
router.post('/check-pass', homeController.checkPass);

router.get('/forgot-password', homeController.forgotPassword);
router.post('/forgot-password', homeController.sendLinkReset);
router.get('/reset-password/:email', homeController.resetPassword);
router.post('/change-password', homeController.changePass);

router.post('/send-response/:email', homeController.sendLinkResponse)

router.post('/history', homeController.getHistoryByDay);


router.get('/admin', admin, homeController.indexAdmin);
router.get('/', homeController.index);
// router.post('/check', homeController.checkSession);




module.exports = router;