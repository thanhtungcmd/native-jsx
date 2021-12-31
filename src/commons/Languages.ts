const Languages = {
    tabs: {
        home: 'Trang chủ',
        notify: 'Thông báo',
        contracts: 'Danh sách hợp đồng',
        loan: 'Đăng ký khoản vay',
        history: 'Lịch sử giao dịch',
        account: 'Tài khoản'
    },
    common: {
        cancel: 'Hủy',
        OK: 'Chọn',
        back: 'Quay lại',
        yes: 'Có',
        no: 'Không',
        close: 'Đóng',
        search: 'Tìm kiếm',
        agree: 'Đồng ý',
        or: 'Hoặc',
        continue: 'Tiếp tục',
        telePhone: '1900 6907'
    },
    errorMsg: {
        noInternet: 'Kết nối bị gián đoạn, vui lòng thử lại!',
        sessionExpired: 'Kết nối bị gián đoạn, vui lòng thử lại!',
        userNameRequired: 'Họ và tên không được để trống',
        userNameLength: 'Họ và tên không được ít hơn 8 ký tự',
        userNameRegex: 'Họ và tên không được chứa ký tự đặc biệt hoặc số',
        emailNull: 'Email không được để trống',
        emailRegex: 'Email không đúng định dạng',
        cardNull: 'Số CMND/CCCD không được để trống',
        cardRegex: 'Số CMND/CCCD phải là số',
        cardCheck: 'Số CMND/CCCD không hợp lệ',
        pwdNull: 'Mật khẩu không được để trống',
        pwdCheck: 'Mật khẩu không được ít hơn 6 ký tự',
        conFirmPwd: 'Xác nhận mật khẩu không trùng khớp với mật khẩu'

    },
    noInternet: {
        offline: 'Kết nối bị gián đoạn',
        desNoInternet: 'Kết nối bị gián đoạn, vui lòng thử lại!'
    },
    location: {
        PermissionAlert: 'PermissionAlert',
        AccessLocationServices: 'AccessLocationServices',
        OpenSetting: 'OpenSetting',
        Cancel: 'Cancel'
    },
    image: {
        camera: 'Camera',
        library: 'Thư viện ảnh',
        permissionAlert: 'Yêu cầu truy cập',
        accessPhotoMsg: 'Univest cần truy cập vào thư viện ảnh của bạn',
        accessCameraMsg: 'Univest cần truy cập vào camera của bạn',
        accessAddPhotoMsg: 'Univest cần thêm ảnh vào thư viện ảnh của bạn',
        openSetting: 'Mở cài đặt',
        deny: 'Từ chối',
        uploading: 'Đang tải ảnh',
        singleUploading: 'Đang tải ảnh lên',
        selectedThumb: 'Đã chọn hình đại diện',
        selectAsThumb: 'Đặt làm hình đại diện',
        uploadFailed: 'Xảy ra lỗi trong quá trình tải ảnh lên'
    },
    onBoarding: [
        {
            title: 'Dịch vụ khác biệt - Ưu điểm vượt trội',
            des: '<a><g>Univest</g><r>.vn</r> là tên thương hiệu của hệ thống dịch vụ tài chính đa tiện ích thuộc Công ty Cổ phần Công nghệ Tài Chính Việt, được xây dựng với mục tiêu trở thành một địa chỉ tin cậy về các dịch vụ tài chính toàn diện hàng đầu Việt Nam.</a>'
        },
        {
            title: 'Giải ngân nhanh chóng',
            des: '<w>Mọi thủ tục đơn giản, nhanh chóng, hỗ trợ và phục vụ tận tâm 24/7 để giải đáp mọi thắc mắc của khách hàng.</w>'
        },
        {
            title: 'Uy tín, Tin cậy',
            des: '<w>Giấy phép kinh doanh minh bạch, rõ ràng. Tất cả thông tin về sản phẩm, dịch vụ được thể hiện minh bạch và đồng nhất trên toàn hệ thống các điểm giao dịch. Thông tin cá nhân của Khách hàng được bảo mật tuyệt đối.</w>'
        }
    ],
    home: {
        title: 'Trang chủ',
        agent: 'Phòng giao dịch',
        loanNow: 'Đăng ký vay ngay',
        insurance: 'Dịch vụ bảo hiểm',
        vps: 'Dịch vụ chứng khoán',
        communication: 'Tin tức truyền thông'
    },
    valuation: {
        title: 'Định giá tài sản',
        car: 'Ô tô',
        motor: 'Xe máy'
    },
    service: {
        title: 'Dịch vụ thanh toán',
        water: 'Hóa đơn nước',
        electric: 'Hóa đơn điện',
        bill: 'Hóa đơn tài chính'
    },
    contracts: {
        title: 'Danh sách hợp đồng',
        finding: 'Tra cứu hợp đồng',
        loaning: 'Đang vay',
        extended: 'Đã gia hạn',
        paid: 'Đã tất toán',
        search: 'Tìm kiếm hợp đồng',
        contractCode: 'Mã hợp đồng',
        amountLoan1: 'Số tiền vay',
        amountLoan2: 'Khoản vay',
        totalAmount: 'Số tiền cần thanh toán',
        disbursementDate: 'Ngày giải ngân',
        nextPayDate: 'Ngày thanh toán kỳ tới',
        status: 'Trạng thái',
        payNow: 'THANH TOÁN NGAY',
        viewDetail: 'Xem chi tiết hợp đồng'
    },
    loan: {
        title: 'Đăng ký khoản vay',
        infoCustomer: 'THÔNG TIN KHÁCH HÀNG',
        fullName: 'Họ và tên',
        formality: 'hình thức vay',
        infoLoan: 'THÔNG TIN KHOẢN VAY',
        assetName: 'tên tài sản',
        propertyType: 'loại tài sản',
        usedTime: 'thời gian sử dụng/Khấu hao',
        loan: 'Số tiền vay',
        borrowedTime: 'Thời gian vay',
        formalOfPayment: 'Hình thức trả lãi',
        applyForLoan: 'Đăng kí vay ngay',
        enterFullName: 'Nhập họ và tên',
        enterPhoneNumber: 'Nhập số điện thoại',
        phoneNumber: 'Số điện thoại',
        maximumMoney: 'Số tiền có thể vay tối đa là'
    },
    history: {
        title: 'Lịch sử giao dịch'
    },
    deTailsHistory: {
        title: 'Chi tiết thanh toán'
    },
    detailsSerVices: {
        services: 'Dịch vụ',
        keyConTract: 'Mã hợp đồng',
        username: 'Họ và tên',
        timePay: 'Thời gian thanh toán',
        totalPay: 'Tổng tiền thanh toán'
    },
    account: {
        title: 'Tài khoản'
    },
    notify: {
        title: 'Thông báo'
    },
    Pay: {
        title: 'Thanh toán'
    },
    itemInForAccount: {
        inFor: 'Thông tin cá nhân',
        changePwd: 'Thay đổi mật khẩu',
        authentication: 'Phương thức xác thực',
        reFerFriends: 'Giới thiệu bạn bè',
        afFiLiateAccount: 'Tài khoản liên kết',
        introduction: 'Giới thiệu và hỏi đáp',
        termSandCondition: 'Điều khoản và điều kiện',
        support: 'Hỗ trợ'
    },
    feedback: {
        title: 'Đánh giá của bạn',
        desCrePTion:
            'Chúng tôi rất hi vọng nhận được đánh giá từ bạn nhằmnâng cao chất lượng phục vụ.'
    },
    authentication: {
        title: 'Phương thức xác thực',
        auThen: 'Xác thực nhanh',
        touchId: 'Touch ID',
        faceId: 'Face ID',
        keyPin: 'Mã pin',
        password: 'Mật khẩu',
        description: 'Đăng nhập bằng vân tay của bạn',
        descriptionFaceId: 'Đăng nhập bằng Face ID của bạn',
        login: 'Đăng nhập',
        forgotPwd: 'Quên mật khẩu',
        otherLogin: 'Đăng nhập với tài khoản khác',
        hello: 'Xin chào',
        company: 'tiềnngay.vn',
        switchboard: 'Tổng đài',
        help: 'Trợ giúp',
        confirm: 'XÁC NHẬN YÊU CẦU',
        facIdConFirm:
            'Quý khách có muốn sử dụng Face ID làm phương thức xác thực chính',
        touchidconfirm:
            'Quý khách có muốn sử dụng Touch ID làm phương thức xác thực chính',
        passCodeConfirm:
            'Quý khách có muốn sử dụng mã pin làm phương thức xác thực chính',
        sensorDescription: 'Chạm vào cảm biến vân tay',
        sensorErrorDescription: 'Thất bại', // Android
        cancelText: 'Đăng nhập bằng mật khẩu' // Android
    },
    errorBiometryType: {
        NOT_DEFINE: 'Vui lòng thêm ít nhất 1 vân tay vào thiết bị của bạn',
        // ios
        RCTTouchIDNotSupported: 'Không hỗ trợ xác thực vân tay trên thiết bị này',
        RCTTouchIDUnknownError:
            'Đăng nhập thất bại nhiều lần, vui lòng đăng nhập với mật khẩu',
        LAErrorTouchIDNotEnrolled:
            'Vui lòng thêm ít nhất 1 faceId vào thiết bị của bạn',
        LAErrorTouchIDNotAvailable:
            'Không có sẵn xác thực nhanh trên thiết bị của bạn',
        ErrorFaceId: 'Vui lòng thêm ít nhất 1 xác thực faceId vào thiết bị của bạn',
        // android
        NOT_SUPPORTED: 'Không hỗ trợ xác thực vân tay trên thiết bị này',
        NOT_AVAILABLE: 'Không hỗ trợ xác thực vân tay trên thiết bị này',
        NOT_ENROLLED: 'Vui lòng thêm ít nhất 1 vân tay vào thiết bị của bạn',
        FINGERPRINT_ERROR_LOCKOUT_PERMANENT:
            'Xác thực không thành công, thử lại sau'
    },
    setPassCode: {
        title: 'Sử dụng mã pin, để đăng nhập nhanh hơn',
        repeat: 'Nhập lại mã PIN',
        error: 'Mật khẩu không trùng khớp',
        footerText: 'Tiếp tục'
    },
    enterPasscode: {
        title: 'Nhập mã pin',
        error: 'Nhập sai mã pin vui lòng nhập lại',
        footerText: 'Quay lại'
    },
    scroll: {
        all: 'Tất cả',
        unread: 'Chưa đọc',
        contract: 'Hợp đồng',
        bh: 'Bảo hiểm',
        pay: 'Thanh toán'
    },
    login: {
        phoneNumber: 'Số điện thoại',
        password: 'Mật khẩu',
        forgotPwd: 'Quên mật khẩu',
        saveInfo: 'Lưu thông tin đăng nhập',
        haveAccount: 'Chưa có tài khoản?',
        registerNow: 'Đăng kí ngay',
        loginFB: 'ĐĂNG NHẬP FACEBOOK',
        loginGoogle: 'ĐĂNG NHẬP GOOGLE'
    },
    changePwd: {
        title: 'Thay đổi mật khẩu',
        oldPass: 'Mật khẩu cũ',
        newPass: 'Mật khẩu mới',
        currentNewPass: 'Nhập lại mật khẩu mới',
        placeOldPass: 'Nhập mật khẩu cũ',
        placeNewPass: 'Nhập mật khẩu mới'
    },
    profileAuth: {
        title: 'Thông tin cá nhân',
        nameLogin: 'Tên đăng nhập',
        username: 'Họ và tên',
        numberPhone: 'Số điện thoại',
        card: 'CMND/CCCD',
        date: 'Ngày cấp',
        place: 'Nơi cấp',
        address: 'Địa chỉ',
        email: 'Email',
        pass: 'Mật khẩu',
        confirmPwd: 'Xác nhận lại mật khẩu',
        enterPwd: 'Nhập mật khẩu',
        currentPass: 'Nhập lại mật khẩu',
        about: 'Nơi bạn biết về chúng tôi',
        knowChannel: 'Bạn biết chúng tôi qua kênh nào',
        keyRefer: 'Mã giới thiệu',
        enterKeyRefer: 'Nhập mã giới thiệu'
    },
    refer: {
        title: 'Giới thiệu bạn bè',
        link: 'Link giới thiệu',
        key: 'Mã giới thiệu',
        qr: 'Mã QR',
        share: 'Chia sẻ',
        copPy: 'Copy',
        reFerLink: 'https://play.google.com/store/apps/de...'
    },
    EditProFile: {
        title: 'CHỈNH SỬA THÔNG TIN CÁ NHÂN',
        placename: 'Nhập họ và tên',
        placePhone: 'Nhập số điện thoại',
        placeAdd: 'Nhập địa chỉ',
        placeEmail: 'Nhập email'
    },
    signIn: {
        title: 'Tạo tài khoản'
    },
    button: {
        btnEditProfile: 'Lưu thông tin',
        btnChangePassword: 'Thay đổi mật khẩu',
        btnSignIn: 'Tạo tài khoản'
    },
    propertyValuation: {
        title: 'ĐỊNH GIÁ TÀI SẢN',
        motor: 'Xe Máy',
        car: 'Ô Tô',
        formality: 'hình thức',
        brandName: 'hãng xe',
        vehicleName: 'tên xe',
        depreciation: 'khấu hao sử dụng',
        valuation: 'Giá trị tài sản',
        money: 'Số tiền vay được',
        select: 'Chọn',
        borrow: 'VAY NGAY',
        currencyUnit: 'VNĐ',
        model:'Dòng xe',
        name:'Tên xe'
    },
    paymentService: {
        title: 'THANH TOÁN TIỆN ÍCH',
        waterBill: 'Hoá đơn nước',
        electricBill: 'Hoá đơn điện',
        financeBill: 'Hoá đơn tài chính',
        provider: 'Nhà cung cấp',
        customCode: 'Mã khách hàng',
        selectProvider: '-Chọn nhà cung cấp-',
        enterCustomCode: 'Nhập nhà cung cấp'
    },
    agent: {
        search: 'Nhập địa chỉ tìm kiếm',
        title: 'Phòng giao dịch'
    },
    ranking: {
        first: 'first',
        second: 'second',
        third: 'third'
    }
};

export default Languages;
