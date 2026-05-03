---
name: cognee
description: This skill should be used when the user asks about "cognee", "memory framework", "vector search", "knowledge graph", or wants to store/retrieve information using Cognee. Also activate when user wants to implement memory features, semantic search, or knowledge extraction.
version: 1.0.0
---

# Cognee Memory Framework

Cognee is an AI memory framework that uses vector databases and knowledge graphs to store, organize, and retrieve information intelligently.

## Overview

Cognee provides:
- **Vector Storage**: Embed and store text as vectors for semantic search
- **Knowledge Graphs**: Extract entities and relationships to build structured knowledge
- **Automatic Indexing**: Process and index documents, code, and conversations
- **Semantic Search**: Find relevant information by meaning, not just keywords

## Core Concepts

### Data Pipeline

```
Raw Data → Extraction → Vectorization → Storage → Retrieval
```

1. **Ingestion**: Add text, documents, or structured data
2. **Processing**: Extract entities, relationships, and chunks
3. **Storage**: Store in vector DB and knowledge graph
4. **Recall**: Search and retrieve relevant context

### Search Types

| Type | Description | Use Case |
|------|-------------|----------|
| `CHUNKS` | Raw text chunks | Document retrieval |
| `SUMMARIES` | Document summaries | Quick overview |
| `GRAPH_COMPLETION` | Knowledge graph traversal | Contextual insights |

## Installation & Setup

### Local Installation

```bash
# Install Cognee
pip install cognee

# Or with specific dependencies
pip install cognee[postgres,neo4j]
```

### Docker Setup

```bash
docker run -d \
  -p 8000:8000 \
  -e COGNEE_API_KEY=your-key \
  cogneeai/cognee:latest
```

### Environment Variables

```bash
export COGNEE_API_KEY="your-api-key"
export COGNEE_BASE_URL="http://localhost:8000"
```

## API Usage

### Adding Data (Ingestion)

```python
import cognee

# Add text
await cognee.add("Text to store and index")

# Add from file
await cognee.add_file("document.pdf")

# Add from directory
await cognee.add_directory("./documents")
```

### Searching Data

```python
# Simple search
results = await cognee.search("query here")

# With specific search type
results = await cognee.search(
    "query",
    search_type="GRAPH_COMPLETION"
)

# With parameters
results = await cognee.search(
    "query",
    max_results=5,
    min_score=0.7
)
```

### Knowledge Graph Queries

```python
# Get related entities
relations = await cognee.get_relations(entity_name)

# Get entity context
context = await cognee.get_entity_context(entity_name)
```

## Common Patterns

### Memory for AI Agents

```python
# Store conversation context
await cognee.add(f"User said: {user_message}")
await cognee.add(f"Assistant responded: {response}")

# Recall relevant context
context = await cognee.search(current_query)
```

### Document Repository

```python
# Index documents
for doc in documents:
    await cognee.add({
        "text": doc.content,
        "metadata": {
            "title": doc.title,
            "author": doc.author,
            "date": doc.date
        }
    })
```

### Code Knowledge Base

```python
# Index code with context
await cognee.add({
    "text": f"{code_snippet}\n# {explanation}",
    "metadata": {
        "language": "python",
        "file_path": "src/module.py",
        "function": "process_data"
    }
})
```

## Integration with Claude Code

### Check Cognee Status

```bash
# Check if Cognee is running
curl http://localhost:8000/health

# Check indexed data
curl http://localhost:8000/status
```

### Best Practices

1. **Chunk Size**: Keep text chunks under 1000 tokens for better retrieval
2. **Metadata**: Always include relevant metadata for filtering
3. **Batch Operations**: Group multiple additions for efficiency
4. **Regular Cleanup**: Periodically clean up outdated or duplicate data

### Limitations

- API rate limits may apply (check your plan)
- Large documents (>100MB) should be pre-chunked
- Vector similarity threshold depends on use case

## Troubleshooting

### Connection Issues
- Verify Cognee server is running: `curl http://localhost:8000/health`
- Check API key is set correctly
- Ensure network access to Cognee endpoint

### Poor Search Results
- Try different `search_type` values
- Adjust `min_score` threshold
- Add more context/data for better matching

### Performance
- Use appropriate `max_results` limit
- Consider pre-indexing frequently accessed data
- Monitor memory usage with large datasets

## When to Use This Skill

Activate this skill when:
- Implementing memory or context features
- Building semantic search capabilities
- Creating knowledge bases or repositories
- Implementing RAG (Retrieval Augmented Generation)
- Need persistent storage for AI conversations
- Building agents that need to remember information
