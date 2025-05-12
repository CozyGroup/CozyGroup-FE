import Navigation from "../../components/ui/Navigation";
import AccountSidebar from "../../components/ui/AccountSidebar";

const Account = () => {
    return (
        <>
            <Navigation items={[
                { label: 'Trang chủ', href: '/' },
                { label: "Tài khoản", href: '/account' },
            ]} />
            <div className="w-full lg:px-[60px] px-[20px] lg:py-[50px] py-[30px] flex flex-col lg:flex-row">
                <AccountSidebar/>
                <div>
                <h1 className="text-[19px] text-primary font-quicksand font-bold mt-[25px] lg:mt-0">THÔNG TIN TÀI KHOẢN</h1>
                <p className="py-2"><strong>Họ tên: </strong>Cozy</p>
                <p className="py-2"><strong>Email: </strong>Cozy@gmail.com</p>
                <p className="py-2"><strong>Số điện thoại: </strong>0987654321</p>
                <p className="py-2"><strong>Địa chỉ: </strong>Cái Răng, Cần Thơ</p>
                </div>
            
            </div>
        </>
    )
}
export default Account;