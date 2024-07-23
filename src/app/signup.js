import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [tooltip, setTooltip] = useState(null);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const showMessage = () => {
    alert("Account Created");
  };

  const generateOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(num => (
      <option key={num} value={num}>{num}</option>
    ));
  };

  const handleTooltipClick = (event, type) => {
    let message = '';
    switch (type) {
      case 'dob':
        message = `Providing your birthday helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our Privacy Policy.`;
        break;
      case 'gender':
        message = `You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.`;
        break;
      default:
        message = '';
    }

    const rect = event.target.getBoundingClientRect();
    const position = {
      top: rect.top + window.scrollY - 10,
      left: rect.left + window.scrollX + 20,
    };

    if (tooltip === type) {
      setTooltip(null);
      setTooltipMessage('');
    } else {
      setTooltip(type);
      setTooltipMessage(message);
      setTooltipPosition(position);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center relative">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm">
        <div className="text-center mb-6">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook Logo"
            className="mx-auto"
            style={{ width: '300px' }}
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Create a new account</h2>
        <p className="text-center text-gray-600 mb-6">It's quick and easy.</p>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Surname"
              className="w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <input
            type="text"
            placeholder="Mobile number or email address"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            placeholder="New password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">
              Date of birth
              <span
                className="ml-1 text-blue-600 cursor-pointer"
                onClick={(event) => handleTooltipClick(event, 'dob')}
              >
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </label>
            {tooltip === 'dob' && (
              <div
                className="absolute bg-white border rounded p-2 shadow-md text-sm text-gray-600"
                style={{ top: tooltipPosition.top, left: tooltipPosition.left, width: '300px' }}
              >
                {tooltipMessage}
              </div>
            )}
            <div className="flex space-x-2 mt-1">
              <select className="w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Day</option>
                {generateOptions(1, 31)}
              </select>
              <select className="w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select className="w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Year</option>
                {generateOptions(1900, new Date().getFullYear())}
              </select>
            </div>
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">
              Gender
              <span
                className="ml-1 text-blue-600 cursor-pointer"
                onClick={(event) => handleTooltipClick(event, 'gender')}
              >
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </label>
            {tooltip === 'gender' && (
              <div
                className="absolute bg-white border rounded p-2 shadow-md text-sm text-gray-600"
                style={{ top: tooltipPosition.top, left: tooltipPosition.left, width: '300px' }}
              >
                {tooltipMessage}
              </div>
            )}
            <div className="flex space-x-4 mt-1">
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" className="form-radio" />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" className="form-radio" />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" className="form-radio" />
                <span>Custom</span>
              </label>
            </div>
          </div>
          <div className="text-xs text-gray-600">
            People who use our service may have uploaded your contact information to Facebook. <a href="#" className="text-blue-600">Learn more</a>.
          </div>
          <div className="text-xs text-gray-600">
            By clicking Sign Up, you agree to our <a href="#" className="text-blue-600">Terms</a>, <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={showMessage}
            className="w-full bg-green-600 text-white p-2 rounded-lg font-bold text-lg hover:bg-green-500"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
