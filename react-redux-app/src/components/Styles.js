import styled from 'styled-components';

// App
export const Header = styled.header`
    font-size: 1.75rem;
    background: linear-gradient(180deg, #5bcef5 0%, #f5a8b4 25%, #ffffff 50%, #f5a8b4 75%, #5bcef5 100%);
    margin: 0 0 4%;
    padding: 2% 0 4%;
`;

export const Input = styled.input`
    width: 15%;
    border: 4px solid #e6c301;
    line-height: 1.5;
    border-radius: 10px;
    margin: 1%;
    font-size: 1.15rem;
    text-align: center;
`;

export const Button = styled.button`
    font-size: 1.2rem;
    line-height: 1.5;
    background: #e6c301;
    border-radius: 10px;
    color: black;
    border: 4px solid #3999aa;
`;

export const Section = styled.section`
    width: 75%;
    margin: 0 auto;
    background: rgba(190, 242, 255, 0.5); 
    padding: 2% 4%;
    border-radius: 8px;
`;

export const Footer = styled.footer`
    font-size: .75rem;
    font-style: italic;
    padding: 3% 0 0;
`;

// RestroomList
export const Span = styled.span`
    font-weight: bold;
`;

export const Quote = styled.h4`
    font-style: italic;
    font-weight: normal;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

// RestroomDetail
export const Outer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 45%;
    margin: 2%;
    border: 1px solid white;
    border-radius: 8px;
    background: #ffeff2;
`;

export const Left = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.div`
    font-size: 1.25rem;
    font-weight: bolder;
`;

export const Address = styled.div`
    margin-bottom: 5%%;
`;

export const AddressH4 = styled.h4`
    margin: 2%;
    font-size: 1.15rem;
`;

export const Icons = styled.img`
    margin: 50% 0;
`;




