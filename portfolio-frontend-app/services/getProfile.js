export async function getProfile(language) {
  try {
    const locale = `locale=${language}`;
    const populate = `populate=avatar&populate=cv`;

    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/profiles?${locale}&${populate}`;

    const response = await fetch(url);

    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  } catch (err) {
    throw err;
  }
}
