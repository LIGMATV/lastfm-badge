# lastfm-badge
Generate a dynamic badge for the last played song on Last.fm. _Insipired from [abskmj/badges-lastfm](https://github.com/abskmj/badges-lastfm)_

## Features
- [x] `user.getRecentTracks` (last-played)
- [ ] `user.getTopAlbums` (top-album)
- [ ] `user.getTopArtists` (top-artist)
- [ ] `user.getTopTags` (top-tag)
- [ ] `user.getTopTracks` (top-track)
- [ ] `user.getWeeklyAlbumChart` (top-album-week)
- [ ] `user.getWeeklyArtistChart` (top-artist-week)
- [ ] `user.getWeeklyTrackChart` (top-track-week)

### Last Played

Displays the last played song scrobbled on Last.fm for a user.

```
![](http://lastfm-badge.vercel.app/last-played?user=rj)
```
![](http://lastfm-badge.vercel.app/last-played?user=rj)


## Configurations

You can see the configurations in https://github.com/LIGMATV/lastfm-badge/blob/main/index.js#L12-L17, there's also the default values for the configurations.

### `user`
```
![](http://lastfm-badge.vercel.app/last-played?user=rj)
```
![](http://lastfm-badge.vercel.app/last-played?user=rj)

### `provider`
Where the badge will be rendered, lightweight alternatives from Shields.io. (Not support `style` and `icon`.)
- **Supported values**:
  - `shields` (Default)
  - `badgen`
  - `badgers`
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&provider=badgen)  
![](http://lastfm-badge.vercel.app/last-played?user=rj&provider=badgers)
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&provider=badgen)  
![](http://lastfm-badge.vercel.app/last-played?user=rj&provider=badgers)

### `style`
> Only suppported in `shields` `provider`.
- **Supported values**:
  - `flat` (Default)
  - `flat-square`
  - `plastic`
  - `for-the-badge`
  - `social`
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&style=social)
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&style=social)

### `color`
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&color=green)
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&color=green)

### `label`
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&label=What%20I%20listening%20now)
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&label=What%20I%20listening%20now)

### `icon`
> Only suppported in `shields` `provider`, until Badgen.net & Badgers supporting Simple Icons.
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&icon=google)
```
![](http://lastfm-badge.vercel.app/last-played?user=rj&icon=google)

## Building

These are the steps to run it locally or deploy it to Vercel.

1. Get Last.fm API key
   - **You must already signed up and login to LastFM account.**
   - Go to [Create API account page](https://www.last.fm/api/account/create).
   - After fill up some informations (like **Contact email** and **Application name**), click <kbd>Submit</kbd>.
   - Copy the value next to "**API key**". _(The character must be 32.)_

### Local

2. Clone this repository
```
git clone https://github.com/LIGMATV/lastfm-badge.git
cd lastfm-badge
npm install
```

3. Create a new file "`.env`" with this content (Replace `XXX...` with your actual API key)
```
API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

3. Start in your terminal
```
npm start
```

### Deploy

2. [<img src="https://vercel.com/button" alt="Deploy with Vercel" width="256"/>](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLIGMATV%2Flastfm-badge&env=API_KEY&envDescription=LastFM%20API%20key.&envLink=https%3A%2F%2Fgithub.com%2FLIGMATV%2Flastfm-badge%2Ftree%2Fmain%3Ftab%3Dreadme-ov-file%23building&project-name=lastfm-badge&repository-name=lastfm-badge)

## Limitation

LastFM does not provide any limits for API per user, including Vercel which does not provide any limits for requests and visitors.
You can also check out [LastFM API TOS](https://www.last.fm/api/tos) and [Vercel Limits Overview](https://vercel.com/docs/limits/overview) to learn more.  
I would recommend you to use your own deployed version to get a stable experience.
