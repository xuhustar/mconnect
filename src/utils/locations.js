const locations = [
	{
		label: 'Hồ Chí Minh',
		value: 'Hồ Chí Minh',
	},
	{
		label: 'Hà Nội',
		value: 'Hà Nội',
	},
	{
		label: 'An Giang',
		value: 'An Giang',
	},
	{
		label: 'Bà Rịa - Vũng Tàu',
		value: 'Bà Rịa - Vũng Tàu',
	},
	{
		label: 'Bạc Liêu',
		value: 'Bạc Liêu',
	},
	{
		label: 'Bắc Giang',
		value: 'Bắc Giang',
	},
	{
		label: 'Bắc Kạn',
		value: 'Bắc Kạn',
	},
	{
		label: 'Bắc Ninh',
		value: 'Bắc Ninh',
	},
	{
		label: 'Bến Tre',
		value: 'Bến Tre',
	},
	{
		label: 'Bình Định',
		value: 'Bình Định',
	},
	{
		label: 'Bình Dương',
		value: 'Bình Dương',
	},
	{
		label: 'Bình Phước',
		value: 'Bình Phước',
	},
	{
		label: 'Bình Thuận',
		value: 'Bình Thuận',
	},
	{
		label: 'Cà Mau',
		value: 'Cà Mau',
	},
	{
		label: 'Cần Thơ',
		value: 'Cần Thơ',
	},

	{
		label: 'Cao Bằng',
		value: 'Cao Bằng',
	},

	{
		label: 'Đắk Lắk',
		value: 'Đắk Lắk',
	},

	{
		label: 'Đà Nẵng',
		value: 'Đà Nẵng',
	},
	{
		label: 'Đắk Nông',
		value: 'Đắk Nông',
	},
	{
		label: 'Điện Biên',
		value: 'Điện Biên',
	},
	{
		label: 'Đồng Nai',
		value: 'Đồng Nai',
	},
	{
		label: 'Đồng Tháp',
		value: 'Đồng Tháp',
	},

	{
		label: 'Gia Lai',
		value: 'Gia Lai',
	},
	{
		label: 'Hà Giang',
		value: 'Hà Giang',
	},
	{
		label: 'Hà Nam',
		value: 'Hà Nam',
	},
	{
		label: 'Hà Tĩnh',
		value: 'Hà Tĩnh',
	},
	{
		label: 'Hải Dương',
		value: 'Hải Dương',
	},
	{
		label: 'Hải Phòng',
		value: 'Hải Phòng',
	},
	{
		label: 'Hậu Giang',
		value: 'Hậu Giang',
	},
	{
		label: 'Hoà Bình',
		value: 'Hoà Bình',
	},

	{
		label: 'Hưng Yên',
		value: 'Hưng Yên',
	},
	{
		label: 'Khánh Hòa',
		value: 'Khánh Hòa',
	},
	{
		label: 'Kiên Giang',
		value: 'Kiên Giang',
	},
	{
		label: 'Kon Tum',
		value: 'Kon Tum',
	},
	{
		label: 'Lai Châu',
		value: 'Lai Châu',
	},
	{
		label: 'Lạng Sơn',
		value: 'Lạng Sơn',
	},
	{
		label: 'Lâm Đồng',
		value: 'Lâm Đồng',
	},
	{
		label: 'Lào Cai',
		value: 'Lào Cai',
	},
	{
		label: 'Long An',
		value: 'Long An',
	},
	{
		label: 'Nam Định',
		value: 'Nam Định',
	},
	{
		label: 'Nghệ An',
		value: 'Nghệ An',
	},
	{
		label: 'Ninh Bình',
		value: 'Ninh Bình',
	},
	{
		label: 'Ninh Thuận',
		value: 'Ninh Thuận',
	},
	{
		label: 'Phú Thọ',
		value: 'Phú Thọ',
	},
	{
		label: 'Phú Yên',
		value: 'Phú Yên',
	},
	{
		label: 'Quảng Bình',
		value: 'Quảng Bình',
	},
	{
		label: 'Quảng Nam',
		value: 'Quảng Nam',
	},
	{
		label: 'Quảng Ngãi',
		value: 'Quảng Ngãi',
	},

	{
		label: 'Quảng Ninh',
		value: 'Quảng Ninh',
	},
	{
		label: 'Quảng Trị',
		value: 'Quảng Trị',
	},
	{
		label: 'Sóc Trăng',
		value: 'Sóc Trăng',
	},

	{
		label: 'Sơn La',
		value: 'Sơn La',
	},
	{
		label: 'Tây Ninh',
		value: 'Tây Ninh',
	},
	{
		label: 'Thái Bình',
		value: 'Thái Bình',
	},
	{
		label: 'Thái Nguyên',
		value: 'Thái Nguyên',
	},
	{
		label: 'Thanh Hóa',
		value: 'Thanh Hóa',
	},
	{
		label: 'Thừa Thiên Huế',
		value: 'Thừa Thiên Huế',
	},
	{
		label: 'Tiền Giang',
		value: 'Tiền Giang',
	},
	{
		label: 'Trà Vinh',
		value: 'Trà Vinh',
	},
	{
		label: 'Tuyên Quang',
		value: 'Tuyên Quang',
	},
	{
		label: 'Vĩnh Long',
		value: 'Vĩnh Long',
	},
	{
		label: 'Vĩnh Phúc',
		value: 'Vĩnh Phúc',
	},
	{
		label: 'Yên Bái',
		value: 'Yên Bái',
	},
]

export default locations
