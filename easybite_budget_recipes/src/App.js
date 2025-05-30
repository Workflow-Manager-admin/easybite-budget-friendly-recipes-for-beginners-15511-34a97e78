import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main container for the EasyBite: Budget-Friendly Recipes for Beginners.
   * Implements a visually clean/top-aligned column layout,
   * clear sections for each feature, and beginner-friendly UI.
   *
   * REF: Now allows users to select a recipe column/category, showing only that column at a time.
   */

  // Category data - same order as the visual and matches the category card content below
  const CATEGORIES = [
    {
      id: 'five-ingredients',
      label: '5-Ingredient Recipes',
      icon: '🖐️',
      description: "Minimal fuss, minimal shopping—delicious meals with just five ingredients!",
      recipes: [
        {
          name: "Garlic Butter Pasta",
          steps: [
            "Cook pasta in boiling salted water until al dente.",
            "While pasta cooks, melt butter in a skillet and gently sauté minced garlic until fragrant.",
            "Drain pasta, reserving a splash of pasta water.",
            "Toss pasta with garlic butter, adding a bit of pasta water if dry. Season with salt and pepper.",
            "Serve hot, topped with grated cheese if desired."
          ]
        },
        {
          name: "Cheesy Tortilla Quesadilla",
          steps: [
            "Heat a skillet over medium.",
            "Place a tortilla in the pan, evenly sprinkle shredded cheese over half.",
            "Fold tortilla over to cover cheese.",
            "Cook until golden brown, flip, and cook second side until cheese is melted.",
            "Cut into wedges and serve."
          ]
        },
        {
          name: "Peanut Butter Banana Toast",
          steps: [
            "Toast bread slices to your liking.",
            "Spread peanut butter onto warm toast.",
            "Slice banana and arrange over peanut butter.",
            "Drizzle with honey and a pinch of cinnamon if desired.",
            "Serve immediately."
          ]
        },
        {
          name: "Egg Fried Rice",
          steps: [
            "Heat oil in a pan/wok, scramble eggs and set aside.",
            "In same pan, add a bit more oil and stir-fry cooked rice until hot.",
            "Add in thawed peas/carrot mix and the scrambled eggs.",
            "Season with soy sauce, mixing well.",
            "Serve garnished with spring onions."
          ]
        },
        {
          name: "Tomato Soup with Grilled Cheese",
          steps: [
            "In a pot, heat canned tomato soup and water/milk as directed.",
            "Meanwhile, butter bread slices and add cheese in between.",
            "Grill in a pan on both sides until bread is golden and cheese melted.",
            "Cut sandwich into halves and serve with hot soup."
          ]
        },
        {
          name: "Chickpea and Spinach Curry",
          steps: [
            "Sauté onion and garlic in oil until soft.",
            "Add canned chickpeas (drained), canned diced tomatoes, and curry powder.",
            "Simmer 10 minutes, stir in fresh spinach until wilted.",
            "Season with salt and serve with rice or bread."
          ]
        },
        {
          name: "Avocado Toast Deluxe",
          steps: [
            "Toast whole grain bread.",
            "Mash ripe avocado with lemon, salt, pepper.",
            "Spread mash over toast, top with sliced tomato or radish.",
            "Sprinkle optional chili flakes or seeds.",
            "Serve immediately."
          ]
        },
        {
          name: "One-Pan Sausage & Veg",
          steps: [
            "Slice sausage and chop veggies (bell pepper, onion, zucchini, etc).",
            "Heat oil in skillet, cook sausage until browned.",
            "Add veggies, sauté until tender.",
            "Season with salt, pepper, herbs.",
            "Serve hot."
          ]
        },
        {
          name: "Tuna Mayo Rice Bowl",
          steps: [
            "Cook rice according to package.",
            "Mix canned tuna with mayonnaise, a pinch of salt, pepper.",
            "Serve tuna mixture over hot rice, add sliced cucumber or corn if desired.",
            "Garnish with green onions."
          ]
        },
        {
          name: "Honey Soy Chicken Stir-Fry",
          steps: [
            "Cut chicken into strips and veggies of choice.",
            "Heat oil, stir-fry chicken until mostly cooked.",
            "Add veggies and cook until crisp-tender.",
            "Stir in honey and soy sauce, toss to coat.",
            "Serve with steamed rice."
          ]
        }
      ]
    },
    {
      id: 'student-meals',
      label: 'Student Meals',
      icon: '🕒',
      description: "Quick, affordable and filling recipes you can prepare in under 30 minutes.",
      recipes: [
        {
          name: "Microwave Mug Omelette",
          steps: [
            "In a mug, beat 2 eggs with a splash of milk.",
            "Add chopped veggies and grated cheese.",
            "Microwave 60–90 seconds until puffed and set.",
            "Season with salt and enjoy from the mug."
          ]
        },
        {
          name: "One-Pot Ramen Bowl",
          steps: [
            "Boil water in a saucepan, add ramen noodles and included seasoning.",
            "When nearly cooked, stir in frozen veggies or spinach and an egg if desired.",
            "Simmer until noodles and veggies are tender.",
            "Serve immediately."
          ]
        },
        {
          name: "Wrap Pizza Express",
          steps: [
            "Lay a tortilla wrap on a baking tray.",
            "Spread tomato sauce and sprinkle cheese on top.",
            "Add sliced veggies or pepperoni if using.",
            "Grill or bake until cheese bubbles and edges crisp.",
            "Slice and serve."
          ]
        },
        {
          name: "Canned Chili Nachos",
          steps: [
            "Preheat oven to 180°C/350°F.",
            "Spread tortilla chips on a baking dish.",
            "Top with canned chili and shredded cheese.",
            "Bake until cheese is melted and bubbly.",
            "Serve with sour cream or sliced jalapeños."
          ]
        },
        {
          name: "Pita Pocket Sandwiches",
          steps: [
            "Cut pita breads in half, form pockets.",
            "Fill with hummus, chopped salad, and cheese or chicken strips.",
            "Wrap and enjoy fresh."
          ]
        },
        {
          name: "Taco Rice Skillet",
          steps: [
            "Brown ground beef (or beans) in pan.",
            "Add taco seasoning and cooked rice.",
            "Stir in salsa and heat through.",
            "Serve with shredded cheese and lettuce."
          ]
        },
        {
          name: "Toasted Cheese Melt",
          steps: [
            "Butter two bread slices, add cheese in between.",
            "Toast in sandwich press or skillet until golden on both sides.",
            "Slice diagonally and serve warm."
          ]
        },
        {
          name: "No-Cook Greek Salad",
          steps: [
            "Chop cucumber, tomatoes, onion, and olives.",
            "Toss with olive oil, salt, pepper, and feta cheese.",
            "Serve cold."
          ]
        },
        {
          name: "Black Bean Burritos",
          steps: [
            "Mash canned black beans with salsa.",
            "Spread mixture on tortillas, add cheese.",
            "Roll, wrap, then microwave or grill till warm."
          ]
        },
        {
          name: "Simple Stir-Fried Udon",
          steps: [
            "Heat oil, stir-fry chopped veggies in pan.",
            "Add cooked udon noodles and soy sauce.",
            "Stir-fry until hot. Serve immediately."
          ]
        }
      ]
    },
    {
      id: 'vegan-protein',
      label: 'Vegan Options by Protein',
      icon: '🌱',
      description: "Find vegan meals by your favorite protein: beans, lentils, tofu, and more.",
      recipes: [
        {
          name: "Lentil & Tomato Stew",
          steps: [
            "Sauté onion and garlic in oil.",
            "Add red lentils, canned tomatoes, and vegetable broth.",
            "Simmer 20–25 min until lentils are soft.",
            "Add salt, pepper, herbs. Serve with bread."
          ]
        },
        {
          name: "Tofu Scramble Wrap",
          steps: [
            "Crumble firm tofu into a pan with oil.",
            "Add turmeric, salt, pepper, and diced veggies.",
            "Sauté 5–7 min, spoon into a wrap with salsa.",
            "Roll and enjoy."
          ]
        },
        {
          name: "Chickpea Spinach Sauté",
          steps: [
            "Heat oil, sauté garlic and onion until soft.",
            "Add chickpeas, cook 2–3 min.",
            "Stir in spinach until wilted.",
            "Season with lemon, salt, pepper. Serve hot."
          ]
        },
        {
          name: "Black Bean Stuffed Peppers",
          steps: [
            "Halve and deseed bell peppers.",
            "Mix black beans, corn, salsa, and cumin.",
            "Fill peppers, bake at 180°C/350°F for 20–25 min.",
            "Serve topped with avocado if desired."
          ]
        },
        {
          name: "Peanut Butter Noodle Bowl",
          steps: [
            "Cook noodles as per package directions.",
            "Whisk together peanut butter, soy sauce, a squeeze of lime, and a splash of water.",
            "Toss cooked noodles with sauce and sliced cucumber or carrots.",
            "Serve garnished with sesame seeds."
          ]
        },
        {
          name: "Kidney Bean Chili",
          steps: [
            "Sauté onion, garlic, and bell pepper in oil.",
            "Add canned kidney beans, diced tomatoes, and chili powder.",
            "Simmer 10–15 min, adjusting seasoning as needed.",
            "Serve with rice or baked potato."
          ]
        },
        {
          name: "Hummus Veggie Wrap",
          steps: [
            "Spread hummus over tortilla or flatbread.",
            "Add grated carrot, sliced cucumber, greens.",
            "Wrap tightly and slice to serve."
          ]
        },
        {
          name: "Red Lentil Curry",
          steps: [
            "Sauté onion and curry powder in pot.",
            "Add rinsed red lentils, coconut milk, and water.",
            "Simmer until lentils are soft, 15–20 min.",
            "Season with salt, sprinkle with cilantro."
          ]
        },
        {
          name: "Sesame Tofu Bites",
          steps: [
            "Pat tofu dry and cut into cubes.",
            "Toss with soy sauce and sesame seeds.",
            "Bake at 200°C/400°F for 20 min, flipping once.",
            "Serve with steamed rice or veggies."
          ]
        },
        {
          name: "Bean & Corn Rice Skillet",
          steps: [
            "Heat oil in skillet, add canned beans and corn.",
            "Stir in cooked rice and salsa; cook until heated.",
            "Serve hot, topped with cilantro."
          ]
        }
      ]
    }
  ];

  const [selectedCategoryId, setSelectedCategoryId] = React.useState(CATEGORIES[0].id);

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
              Bachelor's Cooking
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
            Bachelor's Cooking
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
            {/* Category selection UI */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                margin: '10px 0 22px 0'
              }}
              aria-label="Select recipe category"
            >
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  type="button"
                  style={{
                    background: selectedCategoryId === category.id ? '#FFD600' : '#FFFDEB',
                    color: selectedCategoryId === category.id ? '#222' : '#777',
                    border: selectedCategoryId === category.id
                      ? '2.5px solid #FFD600'
                      : '1.5px solid #FFD600',
                    borderRadius: 7,
                    fontWeight: selectedCategoryId === category.id ? 700 : 500,
                    fontSize: '1.05rem',
                    letterSpacing: '0.02em',
                    transition: 'all 0.1s',
                    padding: '7px 24px',
                    boxShadow: selectedCategoryId === category.id ? '0 1.5px 5px #FFE082' : 'none',
                    cursor: selectedCategoryId === category.id ? 'default' : 'pointer',
                    outline: selectedCategoryId === category.id ? '2px solid #FFD60055' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7
                  }}
                  onClick={() => setSelectedCategoryId(category.id)}
                  aria-pressed={selectedCategoryId === category.id}
                  tabIndex={0}
                  disabled={selectedCategoryId === category.id}
                >
                  <span style={{ fontSize: '1.27em', verticalAlign: 'middle' }}>{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
            {/* Only render the selected category */}
            <div style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              margin: '16px 0',
              minHeight: 100
            }}>
              {CATEGORIES.filter(c => c.id === selectedCategoryId).map(category => (
                <CategoryCard
                  key={category.id}
                  icon={category.icon}
                  title={category.label}
                  description={category.description}
                  bgColor="#FFFDEB"
                  accentColor="#FFD600"
                  recipes={category.recipes}
                />
              ))}
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
              Select the ingredients you have, and we’ll generate a budget-friendly recipe you can cook!
            </div>
            <BuildARecipeTool />
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
              About Bachelor's Cooking
            </h2>
            <div style={{ color: '#222', fontSize: '1.11rem', lineHeight: 1.6 }}>
              Bachelor's Cooking is made for those new to cooking, students, or anyone who wants delicious meals on a budget. All recipes are meant to be stress-free, customizable, and suitable for a wide variety of dietary needs. Discover, experiment, and enjoy your cooking journey!
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
        &copy; {new Date().getFullYear()} Bachelor's Cooking — Budget Friendly Recipes for Beginners
      </footer>
    </div>
  );
}

/**
 * Reusable Card for Recipe Categories.
 * 
 * Refactored: Shows recipes in a responsive 3-column grid layout, wrapping extra recipes to new rows for clarity and space usage.
 * All recipe card formatting and step-by-step instructions remain clear and accessible.
 */
function CategoryCard({ icon, title, description, accentColor, bgColor, recipes }) {
  // Helper: Responsive grid for recipes (3 per row, wrapping)
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
      marginBottom: 10,
      maxWidth: '100%',
    }}>
      <span style={{ fontSize: '2.2rem', marginBottom: 6 }}>
        {icon}
      </span>
      <div style={{ fontWeight: 700, color: accentColor, fontSize: '1.13rem', marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ color: '#555', fontSize: '0.97rem', fontWeight: 400 }}>{description}</div>
      {Array.isArray(recipes) && (
        <div
          style={{
            width: '100%',
            marginTop: 18,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '22px 22px',
            justifyContent: 'center',
            alignItems: 'stretch',
            paddingBottom: 8,
          }}
        >
          {recipes.map((r, idx) =>
            typeof r === "string" ? (
              <div
                key={idx}
                style={{
                  minWidth: 200,
                  padding: '10px 12px',
                  background: '#FFFDEB',
                  borderRadius: 10,
                  border: `1px solid ${accentColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  boxShadow: "0 1px 5px rgba(200,170,10,0.07)",
                  height: "100%",
                  textAlign: 'left'
                }}
              >
                <div style={{ fontWeight: 600 }}>{r}</div>
              </div>
            ) : (
              <div
                key={idx}
                style={{
                  background: '#FFFDEB',
                  border: `1.5px solid ${accentColor}`,
                  borderRadius: 10,
                  boxShadow: '0 1px 8px #ffe08222',
                  padding: '15px 15px 14px 15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: 0,
                  height: '100%',
                  minWidth: 0,
                  textAlign: 'left',
                }}
              >
                {/* Name/title */}
                <div style={{
                  fontWeight: 700,
                  color: accentColor,
                  fontSize: '1.07rem',
                  marginBottom: 4,
                  letterSpacing: 0,
                }}>
                  {r.name}
                </div>
                {/* Steps: vertical numbered, clear and accessible */}
                <ol style={{
                  margin: 0,
                  padding: '0 0 0 18px',
                  listStyle: 'decimal',
                  fontSize: '0.97rem',
                  color: '#444',
                  lineHeight: 1.45,
                  fontWeight: 400,
                  textAlign: 'left'
                }}>
                  {(r.steps || []).map((step, sidx) => (
                    <li
                      key={sidx}
                      style={{
                        marginBottom: 4,
                        whiteSpace: 'normal',
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Build-a-Recipe Tool component.
 * This refactored tool prompts the user to select ingredients first,
 * and generates a recipe only after the user has made their selection.
 * No recipes or suggestions are shown by default, per requirements.
 */
// PUBLIC_INTERFACE
function BuildARecipeTool() {
  // List of ingredients to choose from
  const INGREDIENT_OPTIONS = [
    "Pasta",
    "Eggs",
    "Tomato",
    "Soy Sauce",
    "Rice",
    "Beans",
    "Spinach",
    "Potatoes",
    "Chicken",
    "Tofu"
  ];

  // Structured recipe options for matching (each recipe requires a subset of ingredients)
  const RECIPE_BANK = [
    {
      name: "Garlic Butter Pasta",
      required: ["Pasta"],
      steps: [
        "Cook pasta in boiling salted water until al dente.",
        "While pasta cooks, melt butter in a skillet and gently sauté minced garlic until fragrant.",
        "Drain pasta, reserving a splash of pasta water.",
        "Toss pasta with garlic butter, adding a bit of pasta water if dry. Season with salt and pepper.",
        "Serve hot, topped with grated cheese if desired."
      ]
    },
    {
      name: "Egg Fried Rice",
      required: ["Eggs", "Rice", "Soy Sauce"],
      steps: [
        "Heat oil in a pan/wok, scramble eggs and set aside.",
        "In same pan, add a bit more oil and stir-fry cooked rice until hot.",
        "Add in thawed peas/carrot mix and the scrambled eggs.",
        "Season with soy sauce, mixing well.",
        "Serve garnished with spring onions."
      ]
    },
    {
      name: "Chickpea Spinach Sauté",
      required: ["Beans", "Spinach"],
      steps: [
        "Heat oil, sauté garlic and onion until soft.",
        "Add chickpeas, cook 2–3 min.",
        "Stir in spinach until wilted.",
        "Season with lemon, salt, pepper. Serve hot."
      ]
    },
    {
      name: "Peanut Butter Noodle Bowl",
      required: ["Pasta", "Soy Sauce"],
      steps: [
        "Cook noodles as per package directions.",
        "Whisk together peanut butter, soy sauce, a squeeze of lime, and a splash of water.",
        "Toss cooked noodles with sauce and sliced cucumber or carrots.",
        "Serve garnished with sesame seeds."
      ]
    },
    {
      name: "Avocado Toast Deluxe",
      required: ["Tomato"],
      steps: [
        "Toast whole grain bread.",
        "Mash ripe avocado with lemon, salt, pepper.",
        "Spread mash over toast, top with sliced tomato or radish.",
        "Sprinkle optional chili flakes or seeds.",
        "Serve immediately."
      ]
    },
    {
      name: "Red Lentil Curry",
      required: ["Beans"],
      steps: [
        "Sauté onion and curry powder in pot.",
        "Add rinsed red lentils, coconut milk, and water.",
        "Simmer until lentils are soft, 15–20 min.",
        "Season with salt, sprinkle with cilantro."
      ]
    },
    {
      name: "Tuna Mayo Rice Bowl",
      required: ["Rice"],
      steps: [
        "Cook rice according to package.",
        "Mix canned tuna with mayonnaise, pinch of salt and pepper.",
        "Serve tuna mixture over hot rice, add sliced cucumber or corn if desired.",
        "Garnish with green onions."
      ]
    },
    {
      name: "Tofu Scramble Wrap",
      required: ["Tofu"],
      steps: [
        "Crumble firm tofu into a pan with oil.",
        "Add turmeric, salt, pepper, and diced veggies.",
        "Sauté 5–7 min, spoon into a wrap with salsa.",
        "Roll and enjoy."
      ]
    },
    {
      name: "Black Bean Stuffed Peppers",
      required: ["Beans"],
      steps: [
        "Halve and deseed bell peppers.",
        "Mix black beans, corn, salsa, and cumin.",
        "Fill peppers, bake at 180°C/350°F for 20–25 min.",
        "Serve topped with avocado if desired."
      ]
    }
  ];

  const [selected, setSelected] = React.useState([]);
  const [results, setResults] = React.useState(null);
  const [touched, setTouched] = React.useState(false);

  // Toggle ingredient in the selected array
  const toggleIngredient = (ing) => {
    setTouched(true);
    setSelected((sel) =>
      sel.includes(ing) ? sel.filter((i) => i !== ing) : [...sel, ing]
    );
  };

  // Find recipes matching at least the selected ingredients
  const findRecipes = () => {
    if (!selected.length) {
      setResults([]);
      return;
    }
    // For simplicity, recipes that all their required ingredients are included in selected
    const found = RECIPE_BANK.filter(recipe =>
      recipe.required.every(req => selected.includes(req))
    );
    setResults(found);
  };

  // UI: selection form, then show recipes if found
  return (
    <div
      style={{
        background: '#FFF',
        padding: '20px 18px',
        borderRadius: 8,
        boxShadow: '0 1px 6px rgba(34,34,34,0.06)',
        width: '100%',
        maxWidth: 490,
        margin: '0 auto'
      }}
    >
      {/* Ingredient selection */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 12px',
        justifyContent: 'center',
        marginBottom: 8
      }}>
        {INGREDIENT_OPTIONS.map((ingredient) => (
          <button
            key={ingredient}
            type="button"
            tabIndex={0}
            onClick={() => toggleIngredient(ingredient)}
            aria-pressed={selected.includes(ingredient)}
            style={{
              background: selected.includes(ingredient) ? "#FFD600" : "#FFF9C4",
              color: "#222",
              border: selected.includes(ingredient) ? '2px solid #FFD600' : '1px solid #FFD600',
              borderRadius: 4,
              padding: '6px 16px',
              cursor: "pointer",
              fontWeight: 500,
              outline: selected.includes(ingredient)
                ? "2px solid #FFEB3B"
                : "none",
              transition: "all 0.13s",
              boxShadow: selected.includes(ingredient)
                ? "0 0 2px #FFD600"
                : "none",
            }}
          >
            {ingredient}
          </button>
        ))}
      </div>
      <button
        className="btn"
        style={{
          background: '#FFD600',
          color: '#222',
          fontWeight: 600,
          fontSize: '1rem',
          width: '100%',
          marginTop: 10,
          marginBottom: 2,
        }}
        disabled={!selected.length}
        onClick={findRecipes}
        aria-disabled={!selected.length}
      >
        {selected.length ? "Show Recipes" : "Select Ingredients"}
      </button>

      {/* Results Section (shown only after Find is pressed) */}
      {results && (
        <div style={{ marginTop: 18 }}>
          {results.length === 0 ? (
            <div style={{ color: '#C62828', fontWeight: 500 }}>
              {touched
                ? "No recipes found with the selected ingredients."
                : "Select ingredients to build a recipe."}
            </div>
          ) : (
            <>
              <div style={{
                fontWeight: 600,
                color: '#222',
                marginBottom: 5,
                fontSize: '1.07rem'
              }}>
                Recipes you can make:
              </div>
              <ul style={{
                paddingLeft: 0,
                margin: 0,
                listStyle: "none"
              }}>
                {results.map((recipe, idx) => (
                  <li
                    key={recipe.name}
                    style={{
                      background: "#FFFDEB",
                      border: "1.5px solid #FFD600",
                      borderRadius: 6,
                      padding: "10px 12px",
                      marginBottom: 7,
                      fontSize: "0.98rem",
                      color: "#212121" // Ensures highly contrasting recipe/output text
                    }}
                  >
                    <div style={{
                      fontWeight: 700,
                      color: "#FFD600",
                      marginBottom: 4
                    }}>{recipe.name}</div>
                    <ol style={{ paddingLeft: 19, margin: 0 }}>
                      {(recipe.steps || []).map((step, sidx) => (
                        <li key={sidx} style={{ marginBottom: 1, color: "#333" }}>{step}</li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
