import React from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import ProfileCard from '../../components/profile-card/profile-card';
import FormControl from '../../components/from-control/form';

class Profile extends React.Component {
    fields = [
        {
            name: 'password',
            label: 'Current password:',
            validators: [
                {
                    type: 'minLength',
                    param: 8,
                    message: 'Password must be at least 8 symbols',
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
        {
            type: 'password',
            name: 'newPassword',
            label: 'Password:',
            validators: [
                {
                    type: 'minLength',
                    param: 8,
                    message: 'Password must be at least 8 symbols',
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
        {
            type: 'password',
            name: 'rePassword',
            label: 'Re-Password:',
            validators: [
                {
                    type: 'minLength',
                    param: 8,
                    message: 'Password must be at least 8 symbols',
                },
                {
                    type: 'required',
                    message: 'This field should not be empty'
                },
            ],
        },
    ]

    validators = [
        {
            type: 'passwordMatch',
            param: ['newPassword', 'rePassword'],
            message: 'Passwords are not equals',
        }
    ]

    constructor(props) {
        super(props);

        this.state = {
        }
    }


    submitHandler = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Common>
                <Wrapper>
                    <ProfileCard />

                    <FormControl
                        fields={this.fields}
                        validators={this.validators}
                        formAction={this.submitHandler}
                        buttonTitle='Save'
                    />
                </Wrapper>
            </Common>
        )
    }
}

const Wrapper = styled.section`
    display: grid;
    padding: 2%;
    margin: 0 auto;
    grid-template-columns: 45% 45%;
    grid-gap: 5%;
    padding-left: 5%;
    padding-bottom: 5%;
`;


export default Profile