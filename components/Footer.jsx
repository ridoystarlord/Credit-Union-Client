import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="About Us" />
                <BottomNavigationAction label="Contact Us" />
                <BottomNavigationAction label="Privacy Policy" />
            </BottomNavigation>
        </>
    )
}

export default Footer