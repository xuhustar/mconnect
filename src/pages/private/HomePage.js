import React from 'react'
import Slider from 'react-slick'
import boxGiftIcon from '../../assets/images/icons/box-gift.svg'
import starIcon from '../../assets/images/icons/star.svg'

export const HomePage = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<main className="main home">
			<div className="home-earn-point">
				<h2 className="home-earn-point-title">Thường xuyên tích điểm theo trọn đam mê</h2>
				<Slider {...settings} className="slick-earn-point">
					<div className="slick-item">
						<div className="earn-point">
							<i className="earn-point__icon">
								<img src={boxGiftIcon} alt="" className="img" />
							</i>
							<h3 className="earn-point__title">Mời chiến hữu cùng nhập cuộc</h3>
							<p className="ear-point__desc">
								Nhận ngay 150 điểm khi mời bạn bè đăng ký thành viên
							</p>
							<div className="earn-point__bookmark">
								<img src={starIcon} alt="" className="img" />
								<span>
									<strong>150</strong>
									điểm
								</span>
							</div>
						</div>
					</div>
					<div className="slick-item">
						<div className="earn-point">
							<i className="earn-point__icon">
								<img src={boxGiftIcon} alt="" className="img" />
							</i>
							<h3 className="earn-point__title">Mời chiến hữu cùng nhập cuộc</h3>
							<p className="ear-point__desc">
								Nhận ngay 150 điểm khi mời bạn bè đăng ký thành viên
							</p>
							<div className="earn-point__bookmark">
								<img src={starIcon} alt="" className="img" />
								<span>
									<strong>150</strong>
									điểm
								</span>
							</div>
						</div>
					</div>
					<div className="slick-item">
						<div className="earn-point">
							<i className="earn-point__icon">
								<img src={boxGiftIcon} alt="" className="img" />
							</i>
							<h3 className="earn-point__title">Mời chiến hữu cùng nhập cuộc</h3>
							<p className="ear-point__desc">
								Nhận ngay 150 điểm khi mời bạn bè đăng ký thành viên
							</p>
							<div className="earn-point__bookmark">
								<img src={starIcon} alt="" className="img" />
								<span>
									<strong>150</strong>
									điểm
								</span>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</main>
	)
}
