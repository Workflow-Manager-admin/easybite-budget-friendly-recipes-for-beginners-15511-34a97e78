import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main container for the EasyBite: Budget-Friendly Recipes for Beginners.
   * Implements a visually clean/top-aligned column layout,
   * clear sections for each feature, and beginner-friendly UI.
   */
  return (
    <div className="app" style={{ background: '#FFF9C4', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav
        className="navbar"
        style={{
          backgroundColor: '#FFD600',
          color: '#222',
          borderBottom: '1px solid #eee',
          position: 'sticky',
          top: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo" style={{ fontWeight: 700, fontSize: '1.6rem', letterSpacing: '1px' }}>
              <span className="logo-symbol" style={{ color: '#FFD600', fontSize: '1.8rem' }}>🍳</span>
              EasyBite
            </div>
            <nav className="main-menu" aria-label="Main navigation">
              <ul style={{
                display: 'flex',
                gap: '24px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                fontWeight: 500,
                fontSize: '1rem'
              }}>
                <li><a href="#recipes" style={{ color: '#222', textDecoration: 'none' }}>Recipes</a></li>
                <li><a href="#build" style={{ color: '#222', textDecoration: 'none' }}>Build-a-Recipe</a></li>
                <li><a href="#about" style={{ color: '#222', textDecoration: 'none' }}>About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" style={{
        background: '#FFFDEB',
        textAlign: 'center',
        padding: '100px 0 40px 0',
        marginTop: 0,
      }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="subtitle" style={{ color: '#FFD600', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
            Budget‑Friendly & Beginner Recipes
          </div>
          <h1 className="title" style={{
            color: '#222',
            fontSize: '3.2rem',
            fontWeight: 800,
            marginBottom: 18,
            marginTop: 8,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            EasyBite
          </h1>
          <div className="description" style={{
            color: '#444',
            fontSize: '1.15rem',
            margin: '0 auto 20px auto',
            maxWidth: 520,
            lineHeight: 1.55,
            fontWeight: 400
          }}>
            Simple, customizable recipes for bachelors, students, and beginners. Cook tasty meals with minimal ingredients, save money, and explore new flavors—no experience necessary!
          </div>
          <a href="#build">
            <button className="btn btn-large"
              style={{
                background: '#FFD600',
                color: '#222',
                border: 'none',
                borderRadius: 6,
                padding: '12px 32px',
                fontWeight: 600,
                fontSize: '1.05rem',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(255,214,0,0.10)'
              }}>
              Build Your Recipe
            </button>
          </a>
        </div>
      </header>

      <main>
        <div className="container" style={{ maxWidth: 1000, paddingTop: 32 }}>
          {/* Recipe Categories */}
          <section id="recipes" style={{ marginBottom: 36, background: '#FFF9C4', borderRadius: 12, padding: '24px 0', boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#FFD600', fontSize: '2rem', fontWeight: 700, marginBottom: 18, marginLeft: 24, letterSpacing: '0.01em' }}>Recipe Categories</h2>
            <div style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              margin: '16px 0',
            }}>
              {/* Category: 5-Ingredient Recipes */}
              <CategoryCard
                icon="🖐️"
                title="5-Ingredient Recipes"
                description="Minimal fuss, minimal shopping—delicious meals with just five ingredients!"
                bgColor="#FFFDEB"
                accentColor="#FFD600"
                recipes={[
                  "1. Garlic Butter Pasta",
                  "2. Cheesy Tortilla Quesadilla",
                  "3. Peanut Butter Banana Toast",
                  "4. Egg Fried Rice",
                  "5. Tomato Soup with Grilled Cheese",
                  "6. Chickpea and Spinach Curry",
                  "7. Avocado Toast Deluxe",
                  "8. One-Pan Sausage & Veg",
                  "9. Tuna Mayo Rice Bowl",
                  "10. Honey Soy Chicken Stir-Fry"
                ]}
              />
              {/* Category: Student Meals */}
              <CategoryCard
                icon="🕒"
                title="Student Meals"
                description="Quick, affordable and filling recipes you can prepare in under 30 minutes."
                bgColor="#FFFDEB"
                accentColor="#FFD600"
                recipes={[
                  "1. Microwave Mug Omelette",
                  "2. One-Pot Ramen Bowl",
                  "3. Wrap Pizza Express",
                  "4. Canned Chili Nachos",
                  "5. Pita Pocket Sandwiches",
                  "6. Taco Rice Skillet",
                  "7. Toasted Cheese Melt",
                  "8. No-Cook Greek Salad",
                  "9. Black Bean Burritos",
                  "10. Simple Stir-Fried Udon"
                ]}
              />
              {/* Category: Vegan by Protein */}
              <CategoryCard
                icon="🌱"
                title="Vegan Options by Protein"
                description="Find vegan meals by your favorite protein: beans, lentils, tofu, and more."
                bgColor="#FFFDEB"
                accentColor="#FFD600"
                recipes={[
                  "1. Lentil & Tomato Stew",
                  "2. Tofu Scramble Wrap",
                  "3. Chickpea Spinach Sauté",
                  "4. Black Bean Stuffed Peppers",
                  "5. Peanut Butter Noodle Bowl",
                  "6. Kidney Bean Chili",
                  "7. Hummus Veggie Wrap",
                  "8. Red Lentil Curry",
                  "9. Sesame Tofu Bites",
                  "10. Bean & Corn Rice Skillet"
                ]}
              />
              {/* Category: Build-a-Recipe */}
              <CategoryCard
                icon="🥣"
                title="Build-a-Recipe Tool"
                description="Choose your ingredients—get recipe fits instantly!"
                bgColor="#FFFDEB"
                accentColor="#FFD600"
                recipes={[
                  "1. Choose from: Pasta, Eggs, Tomato, Soy Sauce, Rice, Beans, Spinach, Potatoes, Chicken, Tofu",
                  "2. Garlic Butter Pasta",
                  "3. Chickpea Spinach Sauté",
                  "4. Egg Fried Rice",
                  "5. Peanut Butter Noodle Bowl",
                  "6. Avocado Toast Deluxe",
                  "7. Red Lentil Curry",
                  "8. Tuna Mayo Rice Bowl",
                  "9. Tofu Scramble Wrap",
                  "10. Black Bean Stuffed Peppers"
                ]}
              />
            </div>
          </section>

          {/* Build-a-Recipe Tool Demo Section */}
          <section id="build" style={{
            background: 'linear-gradient(90deg, #FFFDEB 80%, #FFD600 105%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 36,
            boxShadow: '0 1px 10px rgba(255,214,0,0.10)'
          }}>
            <h2 style={{ color: '#222', fontWeight: 700, fontSize: '1.75rem', marginBottom: 14 }}>Build-a-Recipe Tool</h2>
            <div style={{ color: '#666', marginBottom: 18 }}>
              Select the ingredients you have, and we&rsquo;ll suggest beginner-friendly, budget recipes you can make!
            </div>
            {/* Placeholder for input demo for now */}
            <div style={{
              background: '#FFF',
              padding: '20px 18px',
              borderRadius: 8,
              boxShadow: '0 1px 6px rgba(34,34,34,0.06)',
              width: '100%',
              maxWidth: 490,
              margin: '0 auto'
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 12px',
                justifyContent: 'center',
                marginBottom: 8
              }}>
                <span style={{
                  background: '#FFF9C4',
                  color: '#222',
                  border: '1px solid #FFD600',
                  borderRadius: 4,
                  padding: '6px 16px',
                  fontWeight: 500
                }}>Pasta</span>
                <span style={{
                  background: '#FFF9C4',
                  color: '#222',
                  border: '1px solid #FFD600',
                  borderRadius: 4,
                  padding: '6px 16px'
                }}>Eggs</span>
                <span style={{
                  background: '#FFF9C4',
                  color: '#222',
                  border: '1px solid #FFD600',
                  borderRadius: 4,
                  padding: '6px 16px'
                }}>Tomato</span>
                <span style={{
                  background: '#FFF9C4',
                  color: '#222',
                  border: '1px solid #FFD600',
                  borderRadius: 4,
                  padding: '6px 16px'
                }}>Soy Sauce</span>
              </div>
              <button className="btn"
                style={{
                  background: '#FFD600',
                  color: '#222',
                  fontWeight: 600,
                  fontSize: '1rem',
                  width: '100%',
                  marginTop: 10
                }}>
                Find Recipes
              </button>
            </div>
          </section>

          {/* About/EasyBite Info */}
          <section id="about" style={{
            background: '#FFFFFF',
            borderRadius: 12,
            padding: 32,
            marginBottom: 32,
            boxShadow: '0 1px 8px rgba(200,200,0,0.07)'
          }}>
            <h2 style={{ color: '#FFD600', fontSize: '1.5rem', fontWeight: 700, marginBottom: 6 }}>
              About EasyBite
            </h2>
            <div style={{ color: '#222', fontSize: '1.11rem', lineHeight: 1.6 }}>
              EasyBite is made for those new to cooking, students, or anyone who wants delicious meals on a budget. All recipes are meant to be stress-free, customizable, and suitable for a wide variety of dietary needs. Discover, experiment, and enjoy your cooking journey!
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        color: '#888',
        background: '#FFF9C4',
        padding: '30px 0 18px 0',
        fontSize: '1.02rem'
      }}>
        &copy; {new Date().getFullYear()} EasyBite — Budget Friendly Recipes for Beginners
      </footer>
    </div>
  );
}

/**
 * Reusable Card for Recipe Categories.
 */
function CategoryCard({ icon, title, description, accentColor, bgColor, recipes }) {
  return (
    <div style={{
      flex: '1 1 180px',
      minWidth: 200,
      background: bgColor,
      borderRadius: 10,
      boxShadow: '0 1px 6px rgba(220,190,10,0.07)',
      padding: '24px 18px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      border: `1.5px solid ${accentColor}`,
      maxWidth: 220,
      marginBottom: 10
    }}>
      <span style={{ fontSize: '2.2rem', marginBottom: 6 }}>
        {icon}
      </span>
      <div style={{ fontWeight: 700, color: accentColor, fontSize: '1.13rem', marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ color: '#555', fontSize: '0.97rem', fontWeight: 400 }}>{description}</div>
      {Array.isArray(recipes) && (
        <ul style={{
          margin: '16px 0 0 0',
          padding: 0,
          listStyle: 'none',
          textAlign: 'left',
          fontSize: '0.97rem',
          color: '#444',
          lineHeight: 1.45,
          fontWeight: 400
        }}>
          {recipes.map((r, idx) => (
            <li key={idx}
              style={{
                padding: '1px 0',
                borderBottom: idx !== recipes.length - 1 ? '1px solid #ffe082' : 'none'
              }}
            >{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
