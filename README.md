## Startup

1. Run `npm install`
2. Start your "Docker Desktop" app
3. Run `npx fusion start`
4. Go to PB admin: http://localhost/pf/admin/app/browse/pages.html
5. Run database migrations (if applicable)
6. Paste the required data into the `.env` file

While Fusion is running, if you don't see changes to your code reflected in your browser, then try running the following in a separate terminal tab:
```
# This may or may not help
npx fusion rebuild
```

## Info

- Docs: https://secure.tgam.arcpublishing.com/alc/arc-products/pagebuilder/fusion/
- Arc Answers: https://secure.tgam.arcpublishing.com/alc/answers/questions

PB admin:
- http://localhost/pf/admin/app/browse/pages.html
- http://localhost/pf/admin/app/tools/resolver-configs.html (because dev tools tab isn't appearing)

Site:
- http://localhost/movies/Captain-Marvel
- http://localhost/politics/article-ottawa-moves-to-end-employers-monopoly-on-foreign-workers/
