import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    // we create a const loggedIn for the user so that we can directly fetch the values of the user instead of manually typing it
    const loggedIn = { firstName: ' Joel'};
    return (
        <section className="home">
            <div className="home-content">
                {/* this will be the primary part of our homepage */}
                <header className="home-header">
                    <HeaderBox 
                        // we are going to forward a couple of props here
                        type = "greeting"
                        title = "welcome"
                        user = {loggedIn?.firstName || 'Guest'}
                        subtext = "Access and manage your account and transactions efficiently."
                    />
                </header>
                <TotalBalanceBox 
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {1250.35}
                />
            </div>
        </section>
    )
}

export default Home