import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const PageContainer = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default PageContainer