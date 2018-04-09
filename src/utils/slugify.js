export default function slugify(input) {
  return input.replace(/\s/g, '-').toLowerCase();
}
