import Container from "@/components/container";
import Image from "next/image";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="py-[140px] flex justify-center">
      <Container>
        <div className="WordSection1">
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: ".25pt",
              marginBottom: "0in",
              marginLeft: "0in",
              textAlign: "center",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <strong>
              <span style={{ fontSize: "22.0pt", lineHeight: "107%" }}>
                CHÍNH SÁCH BẢO MẬT
              </span>
            </strong>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "10.65pt",
              marginLeft: ".05pt",
              textAlign: "center",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <span style={{ fontSize: "12.0pt", lineHeight: "107%" }}>__</span>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "6.5pt",
              marginLeft: "0in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <span style={{ fontSize: "12.0pt", lineHeight: "107%" }}>
              THƯƠNG HIỆU:
            </span>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.95pt",
              marginLeft: "0in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <Image
              width={216}
              height={52}
              id="Picture36"
              src="data:image/png;base64,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"
              alt="image"
            />
            <span style={{ fontSize: "12.0pt", lineHeight: "107%" }}>
              &nbsp;
            </span>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "7.05pt",
              marginLeft: "0in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <span style={{ fontSize: "12.0pt", lineHeight: "107%" }}>
              &nbsp;
            </span>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".9pt",
              marginLeft: "17.75pt",
              lineHeight: "107%",
            }}
          >
            <strong>
              <span style={{ color: "#C00000" }}>I.</span>
            </strong>{" "}
            <strong>
              <span style={{ color: "#C00000" }}>
                CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN:
              </span>
            </strong>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.85pt",
              marginLeft: ".75in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            1.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            SỰ CHẤP THUẬN
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".75in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Bằng việc trao cho chúng tôi thông tin cá nhân của bạn, sử dụng sàn
            giao dịch thương mại điện tử Furniture Maker bạn đồng ý thông tin cá
            nhân của bạn sẽ được thu thập, sử dụng như được nêu trong Chính Sách
            này. Nếu bạn không đồng ý với Chính Sách này, bạn dừng cung cấp cho
            chúng tôi bất cứ thông tin cá nhân nào và/hoặc sử dụng các quyền như
            được nêu tại Mục 7 dưới đây.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Chúng tôi bảo lưu quyền sửa đổi, bổ sung nhằm hoàn thiện đối với
            Chính Sách này vào bất kỳ thời điểm nào. Chúng tôi khuyến khích bạn
            thường xuyên xem lại Chính Sách Bảo Mật Thông Tin Cá Nhân này để có
            được những cập nhật mới nhất đảm bảo bạn biết và thực hiện quyền
            quản lý thông tin cá nhân của bạn.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.8pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            2.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            MỤC ĐÍCH THU THẬP
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".95pt",
              marginLeft: ".5in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Chúng tôi thu thập thông tin cá nhân chỉ cần thiết nhằm phục vụ cho
            các mục đích:
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.8pt",
              marginLeft: "0in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.45pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            <em>
              <u>Đơn Hàng</u>
            </em>
            : để xử lý các vấn đề liên quan đến đơn đặt hàng của bạn;
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.2pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            <em>
              <u>Duy Trì Tài Khoản</u>
            </em>
            : để tạo và duy trình tài khoản của bạn với chúng tôi, bao gồm cả
            các chương trình khách hàng thân thiết hoặc các chương trình thưởng
            đi kèm với tài khoản của bạn;
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.2pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            <em>
              <u>Dịch Vụ Người Tiêu Dùng, Dịch Vụ Chăm Sóc Khách Hàng</u>
            </em>
            : bao gồm các phản hồi cho các yêu cầu, khiếu nại và phản hồi của
            bạn;
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: ".75in", textIndent: "-.25in" }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            <em>
              <u>Cá Nhân Hóa</u>
            </em>
            : Chúng tôi có thể tổ hợp dữ liệu được thu thập để có một cái nhìn
            hoàn chỉnh hơn về một người tiêu dùng và từ đó cho phép chúng tôi
            phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các khía cạnh, bao gồm
            nhưng không giới hạn: (i) để cải thiện và cá nhân hóa trải nghiệm
            của bạn trên sàn giao dịch thương mại điện tử Furniture Maker; (ii)
            để cải thiện các tiện ích, dịch vụ, điều chỉnh chúng phù hợp với các
            nhu cầu được cá thể hóa và đi đến những ý tưởng dịch vụ mới; (iii) để phục vụ bạn với những giới thiệu,
            quảng cáo được điều chỉnh phù hợp với sự quan tâm của bạn.
          </p>
          
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.2pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            <em>
              <u>An Ninh</u>
            </em>
            : cho các mục đích ngăn ngừa các hoạt động phá hủy tài khoản người
            dùng của khách hàng hoặc các hoạt động giả mạo khách hàng.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: ".75in", textIndent: "-.25in" }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            <em>
              <u>Theo Yêu Cầu Của Pháp Luật</u>
            </em>
            : tùy quy định của pháp luật vào từng thời điểm, chúng tôi có thể
            thu thập, lưu trữ và cung cấp theo yêu cầu của cơ quan nhà nước có
            thẩm quyền.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.85pt",
              marginLeft: ".75in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            3.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            PHẠM VI THU THẬP
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Chúng tôi thu thập thông tin cá nhân của bạn khi:
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.8pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.3pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Bạn trực tiếp cung cấp cho chúng tôi: Đó là các thông tin cá nhân
            bạn cung cấp cho chúng tôi được thực hiện chủ yếu trên sàn giao dịch
            thương mại điện tử Furniture Maker bao gồm: họ tên, địa chỉ thư điện
            tử (email), số điện thoại, địa chỉ, thông tin đăng nhập tài khoản
            bao gồm thông tin bất kỳ cần thiết để thiết lập tài khoản ví dụ như
            tên đăng nhập, mật khẩu đăng nhập, ID/địa chỉ đăng nhập và câu
            hỏi/trả lời an ninh.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.2pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Bạn tương tác với chúng tôi: Chúng tôi sử dụng cookies và công nghệ
            theo dấu khác để thu thập một số thông tin khi bạn tương tác trên
            sàn giao dịch thương mại điện tử Furniture Maker.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: ".75in", textIndent: "-.25in" }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Từ những nguồn hợp pháp khác: Chúng tôi có thể sẽ thu thập thông tin
            cá nhân từ các nguồn hợp pháp khác.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.75pt",
              marginLeft: ".75in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            4.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            THỜI GIAN LƯU TRỮ
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <strong>&nbsp;</strong>
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi khách
            hàng có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và thực hiện hủy
            bỏ. Trong mọi trường hợp thông tin cá nhân của khách hàng sẽ được
            bảo mật trên máy chủ của Furniture Maker
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.75pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            5.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            KHÔNG CHIA SẺ
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".95pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <strong>&nbsp;</strong>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.25pt",
              marginLeft: "17.75pt",
            }}
          >
            Chúng tôi sẽ không cung cấp thông tin cá nhân của bạn cho bất kỳ bên
            thứ ba nào, trừ một số hoạt động cần thiết dưới đây:
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.3pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Các đối tác là bên cung cấp dịch vụ cho chúng tôi liên quan đến thực
            hiện đơn hàng và chỉ giới hạn trong phạm vi thông tin cần thiết cũng
            như áp dụng các quy định đảm bảo an ninh, bảo mật các thông tin cá
            nhân.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.35pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Chúng tôi có thể sử dụng dịch vụ từ một nhà cung cấp dịch vụ là bên
            thứ ba để thực hiện một số hoạt động liên quan đến sàn giao dịch
            thương mại điện tử Furniture Maker và khi đó bên thứ ba này có thể
            truy cập hoặc xử lý các thông tin cá nhân trong quá trình cung cấp
            các dịch vụ đó. Chúng tôi yêu cầu các bên thứ ba này tuân thủ mọi
            luật lệ về bảo vệ thông tin cá nhân liên quan và các yêu cầu về an
            ninh liên quan đến thông tin cá nhân.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.2pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
            }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Các chương trình có tính liên kết, đồng thực hiện, thuê ngoài cho
            các mục địch được nêu tại Mục 2 và luôn áp dụng các yêu cầu bảo mật
            thông tin cá nhân.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "1.9pt",
              marginLeft: ".75in",
              textIndent: "-.25in",
              lineHeight: "114%",
            }}
          >
            <span style={{ lineHeight: "114%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá nhân nếu
            điều đó do luật pháp yêu cầu và việc tiết lộ như vậy là cần thiết
            một cách hợp lý để tuân thủ các quy trình pháp lý.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: ".75in", textIndent: "-.25in" }}
          >
            <span style={{ lineHeight: "111%", fontFamily: "Wingdings" }}>
              ü<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Chuyển giao kinh doanh (nếu có): trong trường hợp sáp nhập, hợp nhất
            toàn bộ hoặc một phần với công ty khác, người mua sẽ có quyền truy
            cập thông tin được chúng tôi lưu trữ, duy trì trong đó bao gồm cả
            thông tin cá nhân.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.75pt",
              marginLeft: ".75in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            6.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            AN TOÀN DỮ LIỆU
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".95pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Chúng tôi luôn nỗ lực để giữ an toàn thông tin cá nhân của khách
            hàng, chúng tôi đã và đang thực hiện nhiều biện pháp an toàn, bao
            gồm:
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Bảo đảm an toàn trong môi trường vận hành: chúng tôi lưu trữ không
            tin cá nhân khách hàng trong môi trường vận hành an toàn và chỉ có
            nhân viên, đại diện và nhà cung cấp dịch vụ có thể truy cập trên cơ
            sở cần phải biết. Chúng tôi tuân theo các tiêu chuẩn ngành, pháp
            luật trong việc bảo mật thông tin cá nhân khách hàng.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
            đến mất mát dữ liệu cá nhân khách hàng, chúng tôi sẽ có trách nhiệm
            thông báo vụ việc cho cơ quan chức năng để điều tra xử lý kịp thời
            và thông báo cho khách hàng được biết.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Các thông tin thanh toán: được bảo mật theo tiêu chuẩn ngành.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.8pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            7.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            QUYỀN CỦA KHÁCH HÀNG ĐỐI VỚI THÔNG TIN CÁ NHÂN
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".95pt",
              marginLeft: ".5in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <span style={{ color: "#0000CC" }}>&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Khách hàng có quyền cung cấp thông tin cá nhân cho chúng tôi và có
            thể thay đổi quyết định đó vào bất cứ lúc nào.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá
            nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông
            tin cá nhân hoặc yêu cầu chúng tôi thực hiện việc này.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.8pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            8.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            THÔNG TIN LIÊN HỆ
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".5in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <span style={{ color: "#0000CC" }}>&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Nếu bạn có câu hỏi hoặc bất kỳ thắc mắc nào về Chính Sách này hoặc
            thực tế việc thu thập, quản lý thông tin cá nhân của chúng tôi, xin
            vui lòng liên hệ với chúng tôi bằng cách:
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Gọi điện thoại đến hotline: 0968730030
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Gửi thư điện tử đến địa chỉ email: info@furnituremaker.vn
          </p>
          
          <h1 style={{ marginLeft: "0in", textIndent: "0in", color: "blue" }}>
            <span
              style={{ fontFamily: '"Calibri",sans-serif', color: "black" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>{" "}
            9.{" "}
            <span style={{ fontFamily: '"Arial",sans-serif' }}>
              &nbsp;&nbsp;&nbsp;
            </span>{" "}
            ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN
          </h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".95pt",
              marginLeft: "14.15pt",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <span style={{ color: "#0000CC" }}>&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Công Ty TNHH Gia Mộc
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: "0in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Thành lập và hoạt động theo Giấy chứng nhận đăng ký doanh nghiệp số:
            031353397 do Sở Kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp, đăng
            ký lần đầu ngày 15/03/2016
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".95pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Trụ sở chính: 68 Nguyễn Huệ, Phường Bến Nghé, Q.1, TP. Hồ Chí Minh
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Văn phòng giao dịch: 25/6A Nhị Bình 2, Nhị Bình, Hóc Môn, TP. Hồ Chí
            Minh
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.8pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".9pt",
              marginLeft: "17.75pt",
              lineHeight: "107%",
            }}
          >
            <strong>
              <span style={{ color: "#C00000" }}>II.</span>
            </strong>{" "}
            <strong>
              <span style={{ color: "#C00000" }}>
                CHÍNH SÁCH BẢO MẬT THANH TOÁN:
              </span>
            </strong>
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.75pt",
              marginLeft: ".75in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "21.9pt", color: "blue" }}>1. CAM KẾT BẢO MẬT</h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Hệ thống thanh toán thẻ được cung cấp bởi các đối tác cổng thanh
            toán (“Đối Tác Cổng Thanh Toán”) đã được cấp phép hoạt động hợp pháp
            tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại
            Furniture Maker đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "2.75pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <h1 style={{ marginLeft: "21.9pt", color: "blue" }}>2. QUY ĐỊNH BẢO MẬT</h1>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".95pt",
              marginLeft: ".75in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            <span style={{ color: "#0000CC" }}>&nbsp;</span>
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa
            (internet banking) đảm bảo tuân thủ các tiêu chuẩn bảo mật của các
            Đối Tác Cổng Thanh Toán gồm:
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá
            trình giao dịch bằng giao thức SSL (Secure Sockets Layer).
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS)
            do Trustwave cung cấp.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy
            cập tài khoản được xác thực.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Tiêu chuẩn mã hóa MD5 128 bit.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính
            ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam.
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Chính sách bảo mật giao dịch trong thanh toán của Furniture Maker áp
            dụng với Khách hàng:
          </p>
          <p
            className="MsoNormal"
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".85pt",
              marginLeft: ".25in",
              textIndent: "0in",
              lineHeight: "107%",
            }}
          >
            &nbsp;
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Furniture Maker cung cấp tiện ích lưu giữ thông tin thẻ để sử dụng
            cho các lần thanh toán sau trên
          </p>
          <p className="MsoNormal" style={{ marginLeft: "17.75pt" }}>
            Furniture Maker với nguyên tắc Furniture Maker chỉ lưu chuỗi đã được
            mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp cho Furniture Maker, vì
            vậy Khách hàng lựa chọn sử dụng tiện ích lưu giữ thông tin thẻ thì
            việc bảo mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi
            Đối Tác Cổng Thanh Toán đã được cấp phép.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có
            khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống
            của Furniture Maker. Đối Tác Cổng Thanh Toán sẽ lưu giữ và bảo mật
            theo tiêu chuẩn quốc tế PCI DSS.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Đối với thẻ nội địa (internet banking), Furniture Maker chỉ lưu trữ
            mã đơn hàng, mã giao dịch.
          </p>
          <p
            className="MsoNormal"
            style={{ marginLeft: "24.7pt", textIndent: "-7.45pt" }}
          >
            <span style={{ lineHeight: "111%" }}>
              •<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;</span>
            </span>{" "}
            Furniture Maker cam kết đảm bảo thực hiện nghiêm túc các biện pháp
            bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện trên sàn
            giao dịch thương mại điện tử Furniture Maker.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
