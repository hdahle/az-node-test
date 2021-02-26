#!/bin/sh

# Gather information about web app resource
APPNAME=$(az webapp list --query [0].name --output tsv)
APPRG=$(az webapp list --query [0].resourceGroup --output tsv)
APPPLAN=$(az appservice plan list --query [0].name --output tsv)
APPSKU=$(az appservice plan list --query [0].sku.name --output tsv)
APPLOCATION=$(az appservice plan list --query [0].location --output tsv)

# Deploy to Azure using az webapp up
az webapp up --name $APPNAME --resource-group $APPRG --plan $APPPLAN --sku $APPSKU --location "$APPLOCATION"

# Now just wait a bit....done