import React from "react";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary mt-3">
        <div className="container px-md-5">
          <div className="px-md-5">
            <a className="navbar-brand fs-2 fw-bolder" href="#">
              Programming Turner
            </a>
          </div>
          <div className="px-md-5">
            <div
              className="d-md-flex justify-content-md-end gap-3"
              id="navbarNav"
            >
              <div>
                <img
                  src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/337679212_737992261352425_7064005870337292651_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHlSASfMfAuUeGeL3OW1TgbExfbbv42IegTF9tu_jYh6CByjiJ0D2ApBlajbAPmZKW3pIDz0X5oslR1IHuvYKc9&_nc_ohc=ypxxiEDYFWgAX_m3GBb&_nc_ht=scontent.fdac136-1.fna&oh=00_AfAv3ILOtQa4IIrpowOMKxMzgbMXfSw7w5kxP3IaSMcxDg&oe=642C1145"
                  className="card-img-top rounded-circle"
                  alt="razib"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container px-md-5 w-75">
        <hr />
      </div>
    </>
  );
};

export default Header;
