const passport= require('passport');
const GoogleStrategy= require('passport-google-oauth20');
const keys= require('./keys');
const User= require('../models/googleuser');

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    })
    
})

passport.use(
    new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
     clientID:keys.google.clientID,
     clientSecret:keys.google.clientSecret
    },async (accessToken,refreshToken,profile,done)=>{
        var isExists= await User.findOne({googleID: profile.id});
        if(isExists){
            console.log('User is: '+ isExists);
            done(null,isExists);

        }
        else{
            new User({
                username: profile.displayName,
                googleID: profile.id
            }).save()
            .then((newUser)=>{
                console.log('New user created: '+newUser);
                done(null,newUser);
    
            });
        }
    })
);