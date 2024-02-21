# import heapq

# def rem_els(n, els, k):
#     pq = []

#     for ele in els:
#         heapq.heappush(pq, ele)
#     for _ in range(k):
#         heapq.heappop(pq)

#     rem_els = [heapq.heappop(pq)[0] for _ in range(len(pq))]
#     rem_els.sort()

#     return rem_els

# n = int(input())
# els = [list(map(int, input().split())) for _ in range(n)]
# k = int(input())

# result = rem_els(n, els, k)

# for ele in result:
#     print(ele)


# import heapq

# def remaining_elements(n, elements, k):
#     pq = []

#     for element in elements:
#         heapq.heappush(pq, element)

#     for _ in range(k):
#         heapq.heappop(pq)

#     rem_elements = [heapq.heappop(pq)[1] for _ in range(len(pq))]
#     rem_elements.sort()

#     return rem_elements


# import re
# def getResponses(valid_auth_tokens, requests):
#     def is_valid_csrf_token(token):
#         return bool(re.match("^[a-zA-Z0-9]{8,}$", token))

#     result = []

#     for request in requests:
#         request_type, url = request[0], request[1]

#         params = {}
#         if "?" in url:
#             param_str = url.split("?")[1]
#             param_list = param_str.split("&")
#             for param in param_list:
#                 key, value = param.split("=")
#                 params[key] = value

#         # Validating authentication token
#         auth_token = params.get("token", "")
#         if auth_token not in valid_auth_tokens:
#             result.append("INVALID")
#             continue

#         if request_type == "POST":
#             csrf_token = params.get("csrf_token", "")
#             if not is_valid_csrf_token(csrf_token):
#                 result.append("INVALID")
#                 continue

#         param_str = ", ".join(["{} {}".format(key, value) for key, value in params.items()])
#         result.append("VALID, {}".format(param_str))

#     return result

# valid_auth_tokens = ["abc123", "xyz456"]
# requests = [
#     ["GET", "http://example.com/resource?token=abc123&param1=value1&param2=value2"],
#     ["POST", "http://example.com/action?token=xyz456&csrf_token=csrf123&param3=value3"],
#     ["GET", "http://example.com/invalid?token=invalid_token&param4=value4"]
# ]

# result = getResponses(valid_auth_tokens, requests)
# print(result)



import re

def getResponses(valid_auth_tokens, requests):
    def is_valid_csrf_token(token):
        return bool(re.match("^[a-zA-Z0-9]{8,}$", token))

    result = []

    for request in requests:
        request_type, url = request[0], request[1]

        params = {}
        if "?" in url:
            param_str = url.split("?")[1]
            param_list = param_str.split("&")
            for param in param_list:
                key, value = param.split("=")
                params[key] = value
        auth_token = params.get("token", "")
        if auth_token not in valid_auth_tokens:
            result.append("INVALID")
            continue

        if request_type == "POST":
            csrf_token = params.get("csrf_token", "")
            if not is_valid_csrf_token(csrf_token):
                result.append("INVALID")
                continue

        param_str = ",".join(["{} {}".format(key, value) for key, value in params.items()])
        result.append("VALID,{}".format(param_str))

    return result

valid_auth_tokens = ["abc123", "xyz456"]
requests = [
    ["GET", "http://example.com/resource?token=abc123&param1=value1&param2=value2"],
    ["POST", "http://example.com/action?token=xyz456&csrf_token=csrf123&param3=value3"],
    ["GET", "http://example.com/invalid?token=invalid_token&param4=value4"]
]

result = getResponses(valid_auth_tokens, requests)
print(result)






import re

def getResponses(valid_auth_tokens, requests):
    def is_valid_csrf_token(token):
        return bool(re.match("^[a-zA-Z0-9]{8,}$", token))

    result = []

    for request in requests:
        request_type, url = request[0], request[1]

        params = {}
        if "?" in url:
            param_str = url.split("?")[1]
            param_list = param_str.split("&")
            for param in param_list:
                key, value = param.split("=")
                params[key] = value

        auth_token = params.get("token", "")
        if auth_token not in valid_auth_tokens:
            result.append("INVALID")
            continue

        if request_type == "POST":
            csrf_token = params.get("csrf_token", "")
            if not is_valid_csrf_token(csrf_token):
                result.append("INVALID")
                continue

        param_str = ",".join(["{} {}".format(key, value) for key, value in params.iteritems()])
        result.append("VALID,{}".format(param_str))

    return result

valid_auth_tokens = ["abc123", "xyz456"]
requests = [
    ["GET", "http://example.com/resource?token=abc123&param1=value1&param2=value2"],
    ["POST", "http://example.com/action?token=xyz456&csrf_token=csrf123&param3=value3"],
    ["GET", "http://example.com/invalid?token=invalid_token&param4=value4"]
]

result = getResponses(valid_auth_tokens, requests)
for res in result:
    print res
