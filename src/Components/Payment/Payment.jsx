import { FinalSubmit } from "./FinalSubmit";
import { PaymentForm } from "./PaymentForm";
import { PriceDetail } from "./PriceDetail";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

const price = {
  rate: 125,
  tax: 20,
};

export const Payment = () => {
  return (
    <Wrapper>
      <div>
        <PaymentForm />
        <FinalSubmit />
      </div>

      <PriceDetail price={price} />
    </Wrapper>
  );
};