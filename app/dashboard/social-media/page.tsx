"use client";
import { useState, useEffect } from "react";
import Dashboard from "@/app/dashboard/Dashboard";

export default function Page() {
  const [values, setValues] = useState({
    platform: "twitter",
    platform_username: "thesophiasegara",
    platform_password: "Fuckumom1!",
    action: "get followers",
    importlio_username: '',
    importlio_password: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const body = JSON.stringify(values);
    const addFollowers = async () => {
        const res = await fetch('/api/social/add-followers', {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const { message } = await res.json()

        alert(message)
    }

    addFollowers()
  }

  return (
    <Dashboard>
      <h3>Social Media</h3>
      <form onSubmit={handleSubmit}>
        {/* username text input */}
        <div className="form-group">
          <label htmlFor="username">Importlio Username</label>
          <input
            type="text"
            className="form-control"
            id="importlio_username"
            name="importlio_username"
            value={values.importlio_username}
            onChange={handleChange}
            required
          />
        </div>

        {/* password text input */}
        <div className="form-group">
          <label htmlFor="importlio_password">Importlio Password</label>
          <input
            type="text"
            className="form-control"
            id="importlio_password"
            name="importlio_password"
            value={values.importlio_password}
            onChange={handleChange}
            required
          />
        </div>
        {/* social media platform select */}
        <div className="form-group">
          <label htmlFor="platform">Platform</label>
          <select
            className="form-control"
            id="platform"
            name="platform"
            value={values.platform}
            onChange={handleChange}
            required
          >
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>
        {/* username text input */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={values.platform_username}
            onChange={handleChange}
            required
          />
        </div>

        {/* password text input */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={values.platform_password}
            onChange={handleChange}
            required
          />
        </div>

        {/* action select  */}
        <div className="form-group">
          <label htmlFor="action">Action</label>
          <select
            className="form-control"
            id="action"
            name="action"
            value={values.action}
            onChange={handleChange}
            required
          >
            <option value="get followers">Get Followers</option>
            <option value="get likes">Get Likes</option>
            <option value="get comments">Get Comments</option>
          </select>
        </div>

        {/* submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Dashboard>
  );
}
