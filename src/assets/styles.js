import { css } from '@emotion/css'

export const main = css`
  height: 100vh;
  width: 100vw;
  background: rgb(185, 250, 255);
  background: radial-gradient(
          circle,
          rgba(185, 250, 255, 1) 0%,
          rgba(35, 62, 236, 1) 40%,
          rgba(0, 0, 0, 1) 80%
  );
  overflow: hidden;
  padding: 0 4rem;
`

export const bn632 = css`
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover{
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  },
  &:focus{
    outline: none;
  }
`

export const bn20 = css`
  background-image: linear-gradient(
          to right,
          #66c5ea,
          #2041d3,
          #66c5ea,
          #2041d3
  );
  margin-left: 0;
  margin-top: 3rem;
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
`

export const wrapper = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const predict_txt = css`
  color: #7ee1ff;
  max-width: 7vw;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: medium;
  margin-right: 9.55rem;
  margin-bottom: 3rem;
`

export const ballWrapper = css`
  height: 100%;
  width: 100%;
  align-items: center;
  user-select: none;
`

export const intro = css`
  width: 40vw;
  height: 100vh;
  padding: 10rem;
  & h2{
    font-size: 4.6rem;
    color: aliceblue;
    font-weight: 600;
    line-height: 78%;
    margin-bottom: 2rem;
  },
  & p{
  color: aliceblue;
  }
`