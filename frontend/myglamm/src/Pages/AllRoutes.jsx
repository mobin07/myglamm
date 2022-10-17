import React from 'react'

const AllRoutes = () => {
  return (
    <Box>
     
    <Routes>
        <Route path='/' element={  <> <Navbar/><Home/> <Footer/></>}></Route>
        <Route path='/product/:type' element={<><Navbar/><ProductItem/><Footer/></>}></Route>
        <Route path='/product/:type/:_id' element={<><Navbar/><SingleProduct/><Footer/></>}></Route>
        <Route path='/checkout' element={<><NavbarCheckout/><CheckOut/><FooterC/></>}></Route>
        <Route path='/mybag' element={<><NavbarBag/><MyBag/><FooterC/></>}/>
        <Route path='/address' element={<><NavbarAddress/><Address/><FooterC/></>}/>
        <Route path='/payment' element={<><Navbarpayment/><Payment/><FooterC/></>}></Route>
        <Route path='*' element={<><Navbar/><NotFound/><Footer/></>}></Route>
        <Route path='/payment' element={<><Navbarpayment/><Payment/></>}/>
    </Routes>

</Box>
  )
}

export default AllRoutes