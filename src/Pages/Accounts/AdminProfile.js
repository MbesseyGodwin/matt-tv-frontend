import React from "react";
import "./Admin.css";
import img from "./owner-picture.jpg";
import { Link } from "react-router-dom"

export default function AdminAccount() {
  return (
    <div className="mt-2">
      <main className="d-flex flex-sm-row flex-column justify-content-between bg-light">
        <div className="mr-auto p-2 text-dark text-center" style={{"backgroundColor": "#2b7c8f"}}>
          <img src={img} alt="owner picture" width="250" className="m-2" />
        </div>

        <div className="p-2 text-dark">
          <h3>About the owner</h3>
          <hr />
          <p>
            Am Idoko Matthew Ogah I was in the year 2000 into the family of
            seven in Obi local government area in Benue state My mother gave
            birth to us five boys and two girls am the last born.
          </p>
          <p>
            I was raise in Obi local government I attended st Christopher
            primary okpaga irabi Ito I graduated in year 2010 I started
            secondary in year 2012 at st Joseph secondary obarike Ito and I
            graduated in year 2018
          </p>
          <p>
            While high institution is on processing for now My favourite
            athletic is gym and I love being a gymer
          </p>
        </div>
      </main>
      <section className="mt-2">
        <Link to={"/login"} className="btn btn-success">SIGN IN NOW</Link>
      </section>
    </div>
  );
}
