

import React from 'react';
import styled from 'styled-components';

const CardHoverTextSimple = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-img" />
        <div className="card-info">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" /></svg>
          <p className="text-title">Card title</p>
          <p className="text-body">Lorem Ipsum dolor sit amet</p>
          <button className="card-button">Read More</button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 190px;
   height: 254px;
   border-radius: 1em;
   padding: 1.9rem;
   background: #f5f5f5;
   position: relative;
   display: flex;
   align-items: flex-end;
   transition: 0.4s ease-out;
   box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
  }

  .card:before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   display: block;
   width: 100%;
   height: 100%;
   background: rgba(238, 116, 116, 0.4);
   z-index: 2;
   transition: 0.5s;
  }

  .card-info {
   position: relative;
   z-index: 3;
   color: #f5f5f5;
   opacity: 0;
   transform: translateY(20%);
   transition: 0.5s;
  }

  /*Text*/
  .text-title {
   font-size: 1.5rem;
   font-weight: 500;
  }

  .text-body {
   letter-spacing: 1px;
   font-size: 0.9rem;
   margin: 5px 0 15px 0;
  }

  /*Button*/
  .card-button {
   padding: 0.6rem;
   outline: none;
   border: none;
   border-radius: 4px;
   background: #ee9ca7;
   color: white;
   font-weight: bold;
   transition: 0.4s ease;
  }

  /*Image*/
  .card-img {
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background: #ee9ca7;
   background: linear-gradient(to bottom, #e7aeae, #ee9ca7);
  }

  /*Hover*/
  .card:hover {
   transform: translateY(5%);
  }

  .card:hover:before {
   opacity: 1;
  }

  .card:hover .card-info {
   opacity: 1;
   transform: translateY(0);
  }

  .card-button:hover {
   background: rgba(218, 77, 77, 0.4);
   color: #f5f5f5;
  }`;

export default CardHoverTextSimple;
