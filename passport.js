const passport= require('passport');
const GoogleStrategy= require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: ""
    }),
    (token,tokenSecret,profile,done)=>{
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
          });

    }
);