import React from 'react';
import BlogImage from "@/src/assets/images/BlogSectionImage.png";
import successStories from "@/src/assets/images/SuccessStories.jpeg";



const BlogSection: React.FC = () => {
  const blogPosts =  [{
    category: 'Learning Tips',
    title: '7 Proven Study Techniques Used by Top Educify Students',
    description: 'Discover effective learning strategies from successful Educify students. Learn how to create a productive study environment, use active recall techniques...',
    author: 'Anish Jangra',
    date: 'July 30, 2024',
    readTime: '10 mins read',
    imageUrl: BlogImage, // Replace with actual image URL
    authorImageUrl: successStories, // Replace with actual author image URL
  },
  {
    id:2,
    category: 'Study Guides',
    title: 'The Complete Guide to Mastering Online Courses on Educify',
    description: 'A comprehensive guide to excelling in online learning, from setting up your study schedule to engaging effectively in virtual classrooms. Learn how to take better notes...',
    author: 'Anish Jangra',
    date: 'July 30, 2024',
    readTime: '10 mins read',
    imageUrl: BlogImage, // Replace with actual image URL
    authorImageUrl: successStories, // Replace with actual author image URL
  },
  {
    category: 'Study Guides',
    title: 'How to Create an Effective Study Schedule That Actually Works',
    description: 'Master the art of time management with this detailed guide to creating a sustainable study routine. Discover how successful students balance their learning goals with...',
    author: 'Anish Jangra',
    date: 'July 30, 2024',
    readTime: '10 mins read',
    imageUrl: BlogImage, // Replace with actual image URL
    authorImageUrl: successStories, // Replace with actual author image URL
  }]
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 text-center">Latest from the Educify Blog</h2>
        <p className="text-gray-600 text-center mt-2">Stay informed with insights, tips, and the latest trends in online learning.</p>
        <p className="text-black text-left mt-2">Categories</p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img
                src={post.imageUrl.src}
                alt={post.title}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center">
                  <img
                    src={post.authorImageUrl.src}
                    alt={post.author}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.date} • {post.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
