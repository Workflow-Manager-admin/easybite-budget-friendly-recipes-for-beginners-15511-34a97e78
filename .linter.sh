#!/bin/bash
cd /home/kavia/workspace/code-generation/easybite-budget-friendly-recipes-for-beginners-15511-34a97e78/easybite_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

