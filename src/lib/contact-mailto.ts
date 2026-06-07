const DEFAULT_SUBJECT = "Inquiry from JustinMalonson.com";
const defaultMailto = `mailto:hello@justinmalonson.com?subject=${encodeURIComponent(DEFAULT_SUBJECT)}`;

export const MAILTO = {
  homepage: defaultMailto,
  about: defaultMailto,
  expertise: defaultMailto,
  contact: defaultMailto,
  footer: defaultMailto,
};
