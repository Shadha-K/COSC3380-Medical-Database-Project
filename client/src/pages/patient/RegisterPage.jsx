import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header"; 
import Footer from "../../components/Footer";

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(firstName, lastName, gender, dob, email, password, phoneNumber, address);
        // Here you would typically submit the form data to your backend for registration
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow container mx-auto px-4 flex justify-center items-center mt-20 mb-10">
                <div className="max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-4 text-center">Patient Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block">First Name</label>
                                <input 
                                    value={firstName} 
                                    onChange={(e) => setFirstName(e.target.value)} 
                                    type="text" 
                                    placeholder="First Name" 
                                    id="firstName" 
                                    name="firstName"
                                    className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block">Last Name</label>
                                <input 
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} 
                                    type="text" 
                                    placeholder="Last Name" 
                                    id="lastName" 
                                    name="lastName"
                                    className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block">Gender</label>
                            <select 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)} 
                                id="gender" 
                                name="gender"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dob" className="block">Date of Birth</label>
                            <input 
                                value={dob} 
                                onChange={(e) => setDob(e.target.value)} 
                                type="date" 
                                id="dob" 
                                name="dob"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block">Email</label>
                            <input 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                type="email" 
                                placeholder="youremail@gmail.com" 
                                id="email" 
                                name="email"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block">Password</label>
                            <input 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                type="password" 
                                placeholder="********" 
                                id="password" 
                                name="password"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block">Phone Number</label>
                            <input 
                                value={phoneNumber} 
                                onChange={(e) => setPhoneNumber(e.target.value)} 
                                type="tel" 
                                placeholder="Phone Number" 
                                id="phoneNumber" 
                                name="phoneNumber"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block">Address</label>
                            <textarea 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                                placeholder="Address" 
                                id="address" 
                                name="address"
                                className="w-full border py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">Register</button>
                    </form>
                    <Link to="/patient/login" className="block text-center mt-4 text-blue-500">Already have an account? Log in here.</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RegisterPage;
