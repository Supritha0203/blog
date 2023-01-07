import React from 'react';

import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
export default function Footer() {
  return (
    <CDBFooter className="shadow">
    <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
      <p> Agar kabhi tumhare besties ke baad yaad aaun to niche dekhle 😜</p>
      <CDBBox display="flex" justifyContent="center" className="flex-wrap">
        <CDBBox>          
          <CDBBox display="flex" className="mt-4">
          <CDBFooterLink href="https://www.linkedin.com/in/supritha-rao-mamindlapelly-7a091b206/">
            <CDBBtn flat color="dark" >
              <CDBIcon fab icon="linkedin" />              
            </CDBBtn>

            </CDBFooterLink>
            <CDBFooterLink href="https://wa.me/919032410121">
            <CDBBtn flat color="dark" className="mx-3">
              <CDBIcon fab icon="whatsapp" />
            </CDBBtn>
            </CDBFooterLink>

            <CDBFooterLink href="https://www.instagram.com/supritharaom/">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram"  />
            </CDBBtn>
            </CDBFooterLink>

          </CDBBox>
        </CDBBox>       
      </CDBBox>
      <small className="text-center mt-5">&copy; You are my property. You are mine. All rights reserved.</small>
    </CDBBox>
  </CDBFooter>
);
  
}