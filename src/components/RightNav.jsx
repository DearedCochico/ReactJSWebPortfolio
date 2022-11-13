import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";


const  Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: right;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 390px) {
        flex-flow: column nowrap;
        background-color: #002538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100%;
        width: 150px; 
        z-index: 2;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
        }
    } 
 
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "notactive"
                }
                to="/Home"
              >
                HOME
              </NavLink>
            </li>

          

            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "notactive"
                }
                to="Projects"
              >
                PROJECTS
              </NavLink>
            </li>

           

            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "notactive"
                }
                to="Contact"
              >
                CONTACT
              </NavLink>
            </li>
    </Ul>
  )
}

export default RightNav