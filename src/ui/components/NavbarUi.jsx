import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import { TbShoppingCart } from 'react-icons/tb';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBNavbarLink,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

export const NavbarUi = () => {
  const { active: aboutInformation } = useSelector((state) => state.section);
  const [openCartModal, setOpenCartModal] = useState(false);

  // d-flex w-auto mb-3"

  return (
    <MDBNavbar expand="lg" dark bgColor="black">
      <div className="w-100 d-flex justify-content-center">
        <MDBTypography color='white' tag='h3'>{aboutInformation?.Nombre}</MDBTypography>  
      </div>
      {/* <MDBNavbarBrand className="w-100 d-flex justify-content-cente">Navbar</MDBNavbarBrand> */}
      {/* <MDBNavbarLink className="ml-auto">
        <MDBIcon fas icon="shopping-cart" />
      </MDBNavbarLink> */}

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          <i className="nav-item nav-link">
            <TbShoppingCart
              style={{
                position: "relative",
                right: "60px",
                width: "30",
                height: "30",
                color: "white",
                cursor: "pointer"
              }}
              onClick={() => {
                setOpenCartModal(true)
              }}                
            />
            {openCartModal && <ShoppingCart closecartModal={setOpenCartModal}/>}
          </i>
        </ul>
      </div>

    </MDBNavbar>
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    //   <div className='w-100 d-flex justify-content-center'>
    //     { aboutInformation?.Nombre }
    //    </div>

    //     <div className="navbar-collapse collapse">
    //         <ul className="navbar-nav ml-auto">
    //             <i
    //                 className="nav-item nav-link"
    //                 style={{
    //                   cursor: 'pointer'
    //                 }}
    //             >
    //                 <ShoppingCart />
    //             </i>
    //         </ul>
    //     </div>
    // </nav>
  );
};
