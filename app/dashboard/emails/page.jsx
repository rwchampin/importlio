"use client";
import React, { useState } from 'react';
import AWS from 'aws-sdk';
export default function Page() {





    const [emailList, setEmailList] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = async () => {
        const emailAddresses = emailList.split(',').map(email => email.trim());

        if (emailAddresses.length === 0) {
            setStatus('Please enter at least one email address.');
            return;
        }

        // AWS configuration
        AWS.config.update({
            region: 'us-east-1', // e.g., 'us-east-1'
            accessKeyId: 'AKIA2NVT2W47FC7EIOKN',
            secretAccessKey: 'LACwNo+yN3KT2szmiYe1YEXc3kSibrMaa/a7sWP8',
        });

        const ses = new AWS.SES({ apiVersion: '2010-12-01' });

        const params = {
            Destination: {
                ToAddresses: emailAddresses,
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: '<html><body><h1>Hello from AWS SES!</h1><p>This is the content of the email.</p></body></html>',
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Your Subject Here',
                },
            },
            Source: 'rwchampin@gmail.com', // Change to your verified SES email address
        };

        try {
            await ses.sendEmail(params).promise();
            setStatus('Email sent successfully!');
        } catch (error) {
            setStatus('Error sending email. Please try again.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>AWS Email Sender</h2>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter comma-separated email addresses"
                value={emailList}
                onChange={(e) => setEmailList(e.target.value)}
            />
            <br />
            <button onClick={sendEmail}>Send Email</button>
            <p>{status}</p>
        </div>
    );
};


