import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const PageContainer = ({ children }) => {
    return (
        <>
            <Header>
                heaader
            </Header>
            <main>

                {children}
            </main>
            <Footer>
                footer
            </Footer>

        </>
    )
}

export default PageContainer